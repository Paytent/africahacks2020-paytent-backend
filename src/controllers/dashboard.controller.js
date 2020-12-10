import { DashboardService } from "../services/index.js";
import { response } from "../utils/index.js";

class DashboardController {
	async fetchDashboard(req, res, next) {
		try {
			let dashboard = await DashboardService.fetchDashboard(req.user);
			res.status(200).json(
				response("Dashboard fetched", dashboard, true)
			);
		} catch (e) {
			next(e);
		}
	}
}

export default new DashboardController();
