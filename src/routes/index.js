import authRoutes from "./auth.js";
import walletRoutes from "./wallet.js";
import dashboardRoutes from "./dashboard.js";
import transactionRoutes from "./transaction.js";

const routes = (router) => {
	router.use("/auth", authRoutes(router));
	router.use("/dashboard", dashboardRoutes(router));
	router.use("/wallet", walletRoutes(router));
	router.use("/transaction", transactionRoutes(router));

	return router;
};

export default routes;
