import _ from "lodash";
import argon2 from "argon2";
import { ApiError, random } from "../utils/index.js";
import { UserService, MailService, WalletService } from "./index.js";
import { token } from "../utils/index.js";

class AuthService {
	async registerUser(user) {
		let otp = random.digits(6);
		user.otp = otp;
		user.role = "basic";
		user.hash = await argon2.hash(user.password);
		user = await UserService.createUser(user);
		let mailOptions = {
			type: "email_verify",
			subject: "Confirm your email - Paytent",
			user: { name: user.name, email: user.email },
			data: { otp, name: user.name },
		};
		let identifier = `${user.name.split(" ")[0]}${random.digits(6)}`;
		await WalletService.createWallet({
			user,
			wallet: { identifier, name: user.name },
		});
		await MailService.sendMail(mailOptions);
		user = _.pick(user, [
			"_id",
			"email",
			"name",
			"activated",
			"pin",
			"verified",
			"role",
		]);
		let accessToken = await token.generate(user);
		return { accessToken };
	}

	async loginUser(user) {
		let userExists = await UserService.getUser({ email: user.email });
		if (!userExists) {
			throw new ApiError("Email is not registered with us", 400);
		}
		let validPassword = await argon2.verify(userExists.hash, user.password);
		if (!validPassword) {
			throw new ApiError("Password is not correct", 400);
		}
		user = _.pick(userExists, [
			"_id",
			"email",
			"name",
			"activated",
			"pin",
			"verified",
			"role",
		]);
		let accessToken = await token.generate(user);
		return { accessToken };
	}

	async verifyOtp({ user, data }) {
		user = await UserService.getUser({ email: user.email });
		if (user.otp === data.otp) {
			let update = await UserService.updateUser(
				{ email: user.email },
				{ otp: null, activated: true }
			);
			return update.ok;
		}
		throw new ApiError("Invalid OTP supplied", 400);
	}

	async requestOtp({ user, data }) {
		user = await UserService.getUser({ email: user.email });
		let otp = random.digits(6);
		let update = await UserService.updateUser(
			{ email: user.email },
			{ otp }
		);
		let mailOptions = {
			type: "email_verify",
			subject: "Confirm your email - Paytent",
			user: { name: user.name, email: user.email },
			data: { otp, name: user.name },
		};
		await MailService.sendMail(mailOptions);
	}
}

export default new AuthService();
