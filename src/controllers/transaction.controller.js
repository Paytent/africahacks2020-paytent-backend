import { TransactionService } from "../services/index.js";
import { response } from "../utils/index.js";

class TransactionController {
	// async addCard(req, res) {
	// 	try {
	// 		let card = await TransactionService.addCard({
	// 			user: req.user,
	// 			data: { ref: req.params.ref },
	// 		});
	// 		res.status(200).json(response("Card Added", {}, true));
	// 	} catch (e) {
	// 		next(e);
	// 	}
	// }

	async fetchTransactions(req, res, next) {
		try {
			let transactions = await TransactionService.fetchTransactions({
				user: req.user,
				data: { walletId: req.params.walletId },
			});
			res.status(200).json(
				response("Transaction fetched", transactions, true)
			);
		} catch (e) {
			next(e);
		}
	}
}

export default new TransactionController();
