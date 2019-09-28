const functions = require('firebase-functions');
const { promisify } = require('util');
const redis = require('redis');


const url = functions.config().redis.url;
const client = redis.createClient(url);
const getAsync = promisify(client.get).bind(client);


module.exports = client;
module.exports.getAsync = getAsync;
