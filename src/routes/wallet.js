import { WalletController } from "../controllers/index.js";
import authUser from "../middlewares/authUser.js";

const routes = (router) => {
	/**
	 * @api {post} /wallet/new Create a new wallet
	 * @apiName Create a wallet
	 * @apiGroup Wallet
	 *
	 * @apiParam (Request body) {String} name  The wallet name field
	 * @apiParam (Request body) {String} identifier The user identifier field
	 *
	 * @apiParam (Request Headers) {String} Authorization The authorization header, format [Bearer token]
	 *
	 * @apiSuccess {String} message Wallet created
	 *
	 *
	 */
	router.post("/new", authUser, WalletController.createWallet);

	return router;
};

export default routes;
