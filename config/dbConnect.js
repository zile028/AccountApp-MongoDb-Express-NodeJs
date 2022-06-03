const mongojs = require("mongojs");
const dbParam = require("./dbConfig")
const db = mongojs(dbParam.dbName);

module.exports = db