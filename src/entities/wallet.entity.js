import argon2 from "argon2";

class WalletEntity {
	constructor({
		name,
		identifier,
		owner,
		type,
		frozen = false,
		balance = 0,
		currency = "NGN",
	}) {
		this.name = name;
		this.identifier = identifier;
		this.owner = owner;
		this.balance = balance;
		this.frozen = frozen;
		this.type = type;
		this.currency = currency;
	}

	build() {
		return {
			name: this.name,
			identifier: this.identifier,
			owner: this.owner,
			balance: this.balance,
			frozen: this.frozen,
			type: this.type,
			currency: this.currency,
		};
	}
}

export default WalletEntity;
