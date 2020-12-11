import { UserService, PaystackService, WalletService } from "./index.js";
import { ApiError } from "../utils/index.js";
import { Query, ObjectId } from "../data-access/index.js";
import { canViewWalletTransactions } from "../permissions/wallet.js";

const Transaction = new Query("transactions");

class TransactionService {
	// async addCard({ user, data }) {
	// 	let verify = await PaystackService.verify(data.ref);
	// 	if (verify.data.status === "failed" || verify.status === false) {
	// 		throw new ApiError("Invalid or failed transaction", 400);
	// 	}
	// 	let cardCode = verify.authorization.authorization_code;
	// 	await UserService.updateUser(
	// 		{ _id: ObjectId(user._id) },
	// 		{ "card.auth": cardCode }
	// 	);
	// 	return true;
	// }

	async fetchTransactions({ user, data }) {
		let wallet = await WalletService.getWallet({
			_id: ObjectId(data.walletId),
		});
		if (!canViewWalletTransactions(user, wallet)) {
			throw new ApiError("Unauthorized to view wallet transactions", 500);
		}
		return await Transaction.findAll({
			$or: [
				{ sender: ObjectId(data.walletId) },
				{ recipient: ObjectId(data.walletId) },
			],
		});
	}
}

export default new TransactionService();
