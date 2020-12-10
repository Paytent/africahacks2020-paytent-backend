import { WalletEntity } from "../entities/index.js";
import { ApiError } from "../utils/index.js";
import { Query, ObjectId } from "../data-access/index.js";

const User = new Query("users");
const Wallet = new Query("wallets");

class DashboardService {
	async fetchDashboard(user) {
		user = await User.findOne({ _id: ObjectId(user._id) });
		delete user.hash;
		delete user.otp;
		let wallets = await Wallet.findAll({ owner: ObjectId(user._id) });
		return { ...user, wallets };
	}
}

export default new DashboardService();
