const admin = require('firebase-admin');

const getClient = require('../redis');
const utils = require('./utils');

const endpointUrl = 'https://us-central1-face-tricks.cloudfunctions.net/api/faces';
const MAX_ID_KEY = 'max_id';
const getFaceConfigKey = id => `${id}_faces`;
const getResultKey = id => `${id}_result`;
const getResultCallback = (id, userId) => `${endpointUrl}/${id}_${userId}`;
const getProgressCallback = id => `${getResultCallback(id)}/progress`;
const getResultDbPath = (id, userId) => `users/${userId}/results/${id}`;

/**
 * Stores the faces-merge config in redis.
 * @param {Object} req
 * @param {Object} res
 * @return {Promise<>}
 */
const create = async (req, res) => {
  const { configs, userId } = req.body;

  try {
    const redis = getClient();

    let maxId = await redis.getAsync(MAX_ID_KEY);

    if (maxId === null) {
      maxId = 0;
      redis.set(MAX_ID_KEY, maxId);
    }

    const resultDbPath = getResultDbPath(maxId, userId);
    await admin
      .database()
      .ref()
      .child(resultDbPath)
      .set({
        progress: 0,
        image: '',
      });

    redis.incr(MAX_ID_KEY);

    const resultCallbackUrl = getResultCallback(maxId, userId);
    const progressCallbackUrl = getProgressCallback(maxId, userId);

    const updatedConfigs = {
      callback: resultCallbackUrl,
      op: configs.op,
    };

    const configsStr = JSON.stringify(updatedConfigs);

    redis.set(getFaceConfigKey(maxId), configsStr);

    redis.quit();

    const respData = utils.makeResponseResult(null, {
      id: maxId.toString(),
      resultPath: resultDbPath,
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
    const redis = getClient();

    const configsStr = await redis.getAsync(getFaceConfigKey(id));

    redis.quit();

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
    const parts = id.split('_');
    const idPart = parts[0];
    const userIdPart = parts[1];

    const redis = getClient();

    redis.set(getResultKey(idPart), url);

    await admin
      .database()
      .ref('users')
      .child(userIdPart)
      .child('results')
      .child(idPart)
      .set({ progress: 100, image: url || '' });

    redis.quit();

    return res.send(utils.makeResponseResult());
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
    const redis = getClient();

    const result = await redis.getAsync(getResultKey(id));

    redis.quit();

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
    const redis = getClient();

    let url = await redis.getAsync(getResultKey(id));

    redis.quit();

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
