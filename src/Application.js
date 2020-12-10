import http from "http";
import Express from "./libs/Express.js";

const express = new Express();

class Application {
	async run() {
		try {
			const server = http.createServer(express.app());
			await server.listen(process.env.PORT);
		} catch (e) {
			throw e;
		}
	}
}

export default Application;
