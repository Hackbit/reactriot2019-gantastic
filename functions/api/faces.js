const os = require('os');
const path = require('path');
const fs = require('fs');
const sharp = require('sharp');
const admin = require('firebase-admin');

const getClient = require('../redis');
const utils = require('./utils');


const endpointUrl = 'https://us-central1-face-tricks.cloudfunctions.net/api/faces';

const MAX_ID_KEY = 'max_id';

const getFaceConfigKey = id => `${id}_faces`;
const getProgressCallback = id => `${getResultCallback(id)}/progress`;
const getResultCallback = (id) => `${endpointUrl}/${id}`;
const getResultDbPath = (id) => `results/${id}`;
const getResultImageCallback = (id) => `results/${id}/result`;
const getResultKey = id => `${id}_faces:result`;
const getResultUserKeyPath = (id, userId) => `users/${userId}/results/${id}`;
const getTempFileName = id => `${id}_result.png`;
const getStorageResultPath = id => `results/${id}/image.jpg`;

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

    const keyPath = getResultUserKeyPath(maxId, userId);
    const resultDbPath = getResultDbPath(maxId, userId);
    await admin
      .database()
      .ref()
      .child(resultDbPath)
      .set({
        progress: 0,
        image: '',
      });

    await admin
      .database()
      .ref()
      .child(keyPath)
      .push(resultDbPath);

    redis.incr(MAX_ID_KEY);

    const resultCallbackUrl = getResultCallback(maxId);
    const progressCallbackUrl = getProgressCallback(maxId);

    const updatedConfigs = {
      callback: resultCallbackUrl,
      op: configs.op,
    };

    const configsStr = JSON.stringify(updatedConfigs);

    redis.set(getFaceConfigKey(maxId), configsStr);

    redis.quit();

    const getResultImageUrl = getResultImageCallback(maxId);

    const respData = utils.makeResponseResult(null, {
      id: maxId.toString(),
      resultPath: resultDbPath,
      resultImageUrl: getResultImageUrl,
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
 * Updates the firebase faces-merge result path with progress 100.
 * @param {Object} req
 * @param {Object} res
 * @return {Promise<>}
 */
const success = async (req, res) => {
  const { id } = req.params;

  try {
    const resultDbPath = getResultDbPath(id);

    await admin
      .database()
      .ref()
      .child(resultDbPath)
      .update({ progress: 100 });

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
    const redis = getClient({ return_buffers: true });

    const resultBuffer = await redis.getAsync(getResultKey(id));

    redis.quit();

    const tempFileName = getTempFileName(id);
    const tempFilePath = path.join(os.tmpdir(), tempFileName);

    await sharp(resultBuffer).jpeg().toFile(tempFilePath);

    const bucket = admin.storage().bucket();

    const storagePath = getStorageResultPath(id);

    await bucket.upload(tempFilePath, {
      metadata: {
        contentType: 'image/jpeg',
      },
      destination: storagePath,
    });

    fs.unlinkSync(tempFilePath);

    return res.send(utils.makeResponseResult(null, { storagePath }));
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
