import mailjet from "node-mailjet";
import ejs from "ejs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { ApiError } from "../utils/index.js";

const mj = mailjet.connect(process.env.MJ_KEY, process.env.MJ_SECRET);
const __dirname = dirname(fileURLToPath(import.meta.url));
class MailService {
	async sendMail(mailOptions) {
		let html = await ejs.renderFile(
			join(__dirname, `../templates/mail/${mailOptions.type}.ejs`),
			mailOptions.data
		);

		let options = {
			Messages: [
				{
					From: {
						Email: "abdulrahmanyusuf125@gmail.com",
						Name: "Paytent",
					},
					To: [
						{
							Email: mailOptions.user.email,
							Name: mailOptions.user.name,
						},
					],
					Subject: mailOptions.subject,
					HTMLPart: html,
				},
			],
		};
		await mj.post("send", { version: "v3.1" }).request(options);
	}
}

export default new MailService();
