const config = require('../config.json');
var ODataServer = require("simple-odata-server");
var Adapter = require('simple-odata-server-mongodb');
var MongoClient = require('mongodb').MongoClient;
const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const DB_URI = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : (config.MONGODB_URI || "mongodb://localhost:27017");
if(!DB_URI) throw new URIError("Mongo DB URI not found");

// Instantiates ODataServer and assigns to odataserver variable.
var odataServer = ODataServer().model(require('../student/student.schema'));

// Connection to database in MongoDB
MongoClient.connect(DB_URI, connectionOptions, function (err, db) {
    odataServer.adapter(Adapter(function (cb) {
        cb(err, db.db(config.DB_NAME));
    }));
});

module.exports = odataServer