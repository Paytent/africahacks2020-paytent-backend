import mongodb from "mongodb";
import Query from "./Query.js";

const { MongoClient, ObjectId } = mongodb;

let connection, database;

try {
	connection = await mongodb.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	database = connection.db(process.env.DB_NAME);
} catch (e) {
	throw e;
}

export { connection, database, ObjectId, Query };
