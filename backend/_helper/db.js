const config = require('../config.json');
const MongoClient = require('mongodb').MongoClient;
const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const DB_URI = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : (config.MONGODB_URI || "mongodb://localhost:27017");
if (!DB_URI) throw new URIError("Mongo DB URI not found");

const client = MongoClient(DB_URI, connectionOptions);

async function studentDBObject() {
  if (!client.isConnected()) await client.connect();
  return client.db(config.DB_NAME).collection(config.DB_COLLECTION);
}

module.exports = {
  students: studentDBObject()
}