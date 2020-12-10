import { UserEntity } from "../entities/index.js";
import { ApiError } from "../utils/index.js";
import { Query } from "../data-access/index.js";

const User = new Query("users");

class UserService {
	async createUser(user) {
		user = new UserEntity(user);
		if (await this.getUser({ email: user.email })) {
			throw new ApiError("User already registered", 400);
		} else {
			user = await User.create(user);
			if (!user) {
				throw new ApiError("Unable to create user account", 500);
			}
			return user;
		}
	}

	async getUser(query) {
		let user = await User.findOne(query);
		return user;
	}

	async updateUser(query, data) {
		let update = await User.updateOne(query, data);
		return update;
	}
}

export default new UserService();
