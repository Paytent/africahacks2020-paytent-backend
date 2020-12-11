import { response } from "../utils/index.js";

const handleError = (err, req, res, next) => {
	res.status(err.statusCode || 500).json(response(err.message, {}, false));
};

export default handleError;
