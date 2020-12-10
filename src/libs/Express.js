import express from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import routes from "../routes/index.js";
import handleError from "../middlewares/handleError.js";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const router = express.Router();
const __dirname = dirname(fileURLToPath(import.meta.url));

class Express {
	constructor() {
		app.use(express.json());
		app.use(compression());
		// app.use(helmet());
		app.use(cors());
		app.use(express.static(join(__dirname, "../../docs")));
		app.use(routes(router));
		app.use("*", (req, res, next) => {
			let err = new Error("This route does not exist");
			err.statusCode = 404;
			next(err);
		});
		app.use(handleError);
	}

	app() {
		return app;
	}
}

export default Express;
