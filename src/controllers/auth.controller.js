import { AuthService } from "../services/index.js";
import { response } from "../utils/index.js";

class AuthController {
	async registerUser(req, res, next) {
		try {
			let token = await AuthService.registerUser(req.body);
			res.status(200).json(
				response("User created", { accessToken: token }, true)
			);
		} catch (e) {
			next(e);
		}
	}

	async loginUser(req, res, next) {
		try {
			let token = await AuthService.loginUser(req.body);
			res.status(200).json(
				response("User logged in", { accessToken: token }, true)
			);
		} catch (e) {
			next(e);
		}
	}

	async verifyOtp(req, res, next) {
		try {
			let verified = await AuthService.verifyOtp({
				user: req.user,
				data: req.body,
			});
			res.status(200).json(
				response("Verification successful", { verified }, true)
			);
		} catch (e) {
			next(e);
		}
	}

	async requestOtp(req, res, next) {
		try {
			let verified = await AuthService.requestOtp({
				user: req.user,
				data: req.body,
			});
			res.status(200).json(response("OTP resent", {}, true));
		} catch (e) {
			next(e);
		}
	}
}

export default new AuthController();
