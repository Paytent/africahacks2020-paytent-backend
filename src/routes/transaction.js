import { TransactionController } from "../controllers/index.js";
import authUser from "../middlewares/authUser.js";

const routes = (router) => {
	/**
	 * @api {get} /transaction/all/:walletId Fetch wallet transactions
	 * @apiName Fetch wallet transactions
	 * @apiGroup Transaction
	 *
	 * @apiParam (Request Headers) {String} Authorization The authorization header, format [Bearer token]
	 *
	 * @apiSuccess {String} message Transactions fetched
	 *
	 *
	 */
	router.get(
		"/all/:walletId",
		authUser,
		TransactionController.fetchTransactions
	);

	// router.get("/card/:ref", authUser, TransactionController.addCard);

	return router;
};

export default routes;
