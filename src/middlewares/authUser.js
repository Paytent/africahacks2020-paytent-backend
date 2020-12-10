import { ApiError, token, response } from "../utils/index.js";
import _ from "lodash";
import UserService from "../services/user.service.js";

const authUser = async (req, res, next) => {
	let authorization = req.headers.authorization;
	if (!authorization) {
		next(new ApiError("Acess forbidden, please login", 403));
	} else {
		authorization = authorization.split(" ");
		if (authorization[0] !== "Bearer") {
			next(new ApiError("Invalid authorization header", 403));
		} else {
			let user = await token.decode(authorization[1]);
			user = await UserService.getUser({ email: user.email });
			if (!user) {
				next(new ApiError("User does not exist", 400));
			}
			req.user = _.pick(user, [
				"_id",
				"email",
				"name",
				"activated",
				"pin",
				"verified",
				"role",
			]);
			next();
		}
	}
};

export default authUser;
