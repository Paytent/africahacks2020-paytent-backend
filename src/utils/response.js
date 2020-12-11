const response = (message, data, status) => {
	if (!data) {
		return { message, status };
	}
	return {
		message,
		data,
		status,
	};
};

export default response;
