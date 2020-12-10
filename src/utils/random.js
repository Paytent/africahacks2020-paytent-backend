const random = {
	digits(len) {
		return Math.floor(10000000000 + Math.random() * 90000000000000)
			.toString()
			.substr(0, len);
	},
};

export default random;
