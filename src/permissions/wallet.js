const canViewWalletTransactions = (user, wallet) => {
	return user._id.toString() === wallet.owner.toString();
};

export { canViewWalletTransactions };
