import { DashboardController } from "../controllers/index.js";
import authUser from "../middlewares/authUser.js";

const routes = (router) => {
	/**
	 * @api {get} /dashboard Fetch user dashboard
	 * @apiName fetch user dashboard
	 * @apiGroup Dashboard
	 *
	 * @apiParam (Request Headers) {String} Authorization The authorization header, format [Bearer token]
	 *
	 * @apiSuccess {String} message Dashboard fetched
	 *
	 *
	 */
	router.get("/", authUser, DashboardController.fetchDashboard);

	return router;
};

export default routes;
