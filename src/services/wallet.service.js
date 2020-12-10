import { WalletEntity } from "../entities/index.js";
import { ApiError } from "../utils/index.js";
import { Query, ObjectId } from "../data-access/index.js";

const Wallet = new Query("wallets");

class WalletService {
	async createWallet({ user, wallet }) {
		const createWallet = async (wallet) => {
			wallet = await Wallet.create(wallet);
			if (!wallet) {
				throw new ApiError("Unable to create wallet", 500);
			}
			return wallet;
		};

		wallet = new WalletEntity(wallet);
		if (await this.getWallet({ identifier: wallet.identifier })) {
			throw new ApiError("Wallet identifier already taken", 400);
		} else {
			if (!(await this.getWallet({ owner: ObjectId(user._id) }))) {
				wallet.owner = user._id;
				wallet.type = "personal";
				return createWallet(wallet);
			}
			if (user.role !== "business") {
				throw new ApiError("You cannot create more than a wallet", 400);
			} else {
				wallet.owner = user._id;
				wallet.type = "business";
				return createWallet(wallet);
			}
		}
	}

	async getWallet(query) {
		let wallet = await Wallet.findOne(query);
		return wallet;
	}
}

export default new WalletService();
