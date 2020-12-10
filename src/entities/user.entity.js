import argon2 from "argon2";

class UserEntity {
	constructor({
		name,
		email,
		hash,
		phone = null,
		bvn = null,
		otp = null,
		role = "basic",
		address = {},
		cards = [],
		banks = [],
		activated = false,
		verified = false,
	}) {
		this.name = name;
		this.email = email;
		this.hash = hash;
		this.phone = phone;
		this.bvn = bvn;
		this.otp = otp;
		this.role = role;
		this.address = address;
		this.banks = banks;
		this.cards = cards;
		this.activated = activated;
		this.verified = verified;
	}

	build() {
		return Object.freeze({
			name: this.name,
			email: this.email,
			hash: this.hash,
			phone: this.phone,
			bvn: this.bvn,
			otp: this.otp,
			role: this.role,
			address: this.address,
			banks: this.banks,
			cards: this.cards,
			activated: this.activated,
			verified: this.verified,
		});
	}
}

export default UserEntity;
