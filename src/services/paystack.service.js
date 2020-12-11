import axios from "axios";

const baseUrl = "https://api.paystack.co";
const headers = {
	Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
};
class PaystackService {
	async verify(ref) {
		return await axios.get(`${baseUrl}/transaction/verify/${ref}`, {
			headers,
		});
	}
}

export default new PaystackService();
