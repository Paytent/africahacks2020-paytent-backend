import { WalletService } from "../services/index.js";
import { response } from "../utils/index.js";

class AuthController {
	async createWallet(req, res, next) {
		try {
			let wallet = await WalletService.createWallet({
				user: req.user,
				wallet: req.body,
			});
			res.status(200).json(response("Wallet created", wallet, true));
		} catch (e) {
			next(e);
		}
	}
}

export default new AuthController();
