import { database, ObjectId } from "./index.js";

class Query {
	constructor(col) {
		this.collection = database.collection(col);
	}

	async create(data, opts = {}) {
		let insert = await this.collection.insertOne(data, opts);
		if (insert.insertedId) {
			return await this.findOne({ _id: ObjectId(insert.insertedId) }, {});
		}
		return null;
	}

	async findOne(query, opts = {}) {
		return await this.collection.findOne(query, opts);
	}

	async findAll(query, opts = {}) {
		return await this.collection.find(query, opts).toArray();
	}

	async updateOne(query, data, opts = {}) {
		let update = await this.collection.updateOne(query, { $set: data });
		return update;
	}
}

export default Query;
