import authRoutes from "./auth.js";
import walletRoutes from "./wallet.js";
import dashboardRoutes from "./dashboard.js";

const routes = (router) => {
	router.use("/auth", authRoutes(router));
	router.use("/dashboard", dashboardRoutes(router));
	router.use("/wallet", walletRoutes(router));

	return router;
};

export default routes;
