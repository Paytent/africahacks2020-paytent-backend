import { AuthController } from "../controllers/index.js";
import authUser from "../middlewares/authUser.js";

const routes = (router) => {
	
	/**
	 * @api {post} /auth/register Register a new user
	 * @apiName Register new user
	 * @apiGroup Auth
	 *
	 * @apiParam (Request body) {String} name  The user name field
	 * @apiParam (Request body) {String} email The user email field
	 * @apiParam (Request body) {String} password the user password field
	 *
	 * @apiSuccess {String} message User registered
	 *
	 *
	 */
	router.post("/register", AuthController.registerUser);
	
	/**
	 * @api {post} /auth/login Login a user
	 * @apiName Login user
	 * @apiGroup Auth
	 *
	 * @apiParam (Request body) {String} email The user email field
	 * @apiParam (Request body) {String} password the user password field
	 *
	 * @apiSuccess {String} message User loggedin
	 *
	 *
	 */
	router.post("/login", AuthController.loginUser);

	/**
	 * @api {post} /auth/verifyOtp Verify OTP
	 * @apiName Verify OTP
	 * @apiGroup Auth
	 *
	 * @apiParam (Request Headers) {String} Authorization The authorization header, format [Bearer token]
	 *
	 * @apiParam (Request body) {String} otp the otp sent to the user
	 *
	 * @apiSuccess {String} message OTP verified
	 *
	 *
	 */
	router.post("/verifyOtp", authUser, AuthController.verifyOtp);

	/**
	 * @api {post} /auth/requestOtp Request OTP
	 * @apiName Request OTP
	 * @apiGroup Auth
	 *
	 * @apiParam (Request Headers) {String} Authorization The authorization header, format [Bearer token]
	 *
	 * @apiSuccess {String} message OTP verified
	 *
	 *
	 */
	router.post("/requestOtp", authUser, AuthController.requestOtp);

	return router;
};

export default routes;
