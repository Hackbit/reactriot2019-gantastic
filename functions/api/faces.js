const redis = require('../redis');
const utils = require('./utils');


const endpointUrl = 'https://us-central1-face-tricks.cloudfunctions.net/api/faces';

/**
 * Stores the faces-merge config in redis.
 * @param {Object} req
 * @param {Object} res
 * @return {Promise<>}
 */
const create = async (req, res) => {
  const { configs } = req.body;

  try {
    let maxId = await redis.getAsync('maxid');

    if (maxId === null) {
      maxId = 0;
      redis.set('maxId', maxId);
    }

    redis.incr('maxId');

    const resultCallbackUrl = `${endpointUrl}/${maxId}`;
    const progressCallbackUrl = `${resultCallbackUrl}/progress`;

    const updatedConfigs = {
      callback: resultCallbackUrl,
      op: configs.op,
    };

    const configsStr = JSON.stringify(updatedConfigs);

    redis.set(`${maxId}_faces`, configsStr);

    const respData = utils.makeResponseResult(null, {
      id: maxId,
      resultCallback: resultCallbackUrl,
      progressCallback: progressCallbackUrl,
    });

    return res.send(respData);
  } catch (err) {
    console.log(err);
    return res.send(utils.makeResponseResult(err));
  }
};

/**
 * Gets a faces-merge config from redis.
 * @param {Object} req
 * @param {Object} res
 * @return {Promise<>}
 */
const get = async (req, res) => {
  const { id } = req.params;

  try {
    const configsStr = await redis.getAsync(`${id}_faces`);

    const configs = JSON.parse(configsStr);

    const respData = utils.makeResponseResult(null, { configs });

    return res.send(respData);
  } catch (err) {
    console.log(err);
    return res.send(utils.makeResponseResult(err));
  }
};

/**
 * Stores a faces-merge success result in redis.
 * @param {Object} req
 * @param {Object} res
 * @return {Promise<>}
 */
const success = async (req, res) => {
  const { url } = req.body;
  const { id } = req.params;

  try {
    redis.set(`${id}_result`, url);

    return res.sendStatus(204);
  } catch (err) {
    console.log(err);
    return res.send(utils.makeResponseResult(err));
  }
};

/**
 * Returns a faces-merge result progress (true for done, otherwise false) from redis.
 * @param {Object} req
 * @param {Object} res
 * @return {Promise<>}
 */
const getResultProgress = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await redis.getAsync(`${id}_result`);

    const isDone = result !== null;

    const respData = utils.makeResponseResult(null, { id, isDone });

    return res.send(respData);
  } catch (err) {
    console.log(err);
    return res.send(utils.makeResponseResult(err));
  }
};

/**
 * Gets a faces-merge success result from redis.
 * @param {Object} req
 * @param {Object} res
 * @return {Promise<>}
 */
const getResult = async (req, res) => {
  const { id } = req.params;

  try {
    let url = await redis.getAsync(`${id}_result`);

    const respData = utils.makeResponseResult(null, { id, url });

    return res.send(respData);
  } catch (err) {
    console.log(err);
    return res.send(utils.makeResponseResult(err));
  }
};


module.exports.post = create;
module.exports.get = get;
module.exports.success = success;
module.exports.getResult = getResult;
module.exports.getResultProgress = getResultProgress;
