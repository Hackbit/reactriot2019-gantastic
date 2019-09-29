const functions = require('firebase-functions');
const { promisify } = require('util');
const redis = require('redis');


const url = functions.config().redis.url;

const getClient = (options = {}) => {
  const client = redis.createClient(url, options);
  client.getAsync = promisify(client.get).bind(client);
  return client;
};


module.exports = getClient;
