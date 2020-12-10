import jwt from "jsonwebtoken";

let token = {
	async generate(payload) {
		return await jwt.sign(payload, process.env.JWT_SECRET, {
			expiresIn: "3d",
		});
	},

	async decode(token) {
		return await jwt.verify(token, process.env.JWT_SECRET);
	},
};

export default token;
