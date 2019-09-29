const functions = require('firebase-functions');
const { promisify } = require('util');
const redis = require('redis');


const url = functions.config().redis.url;
let client;


const getClient = () => {
  client = client && client.connected ? client : redis.createClient(url);
  client.getAsync = client.getAsync || promisify(client.get).bind(client);
  return client;
};


module.exports = getClient;
