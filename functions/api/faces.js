const redis = require('../redis');

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

    const updatedConfigs = {
      callback: `${configs.callback}/${maxId}`,
      op: configs.op,
    };

    const configsStr = JSON.stringify(updatedConfigs);

    redis.set(`${maxId}_faces`, configsStr);

    return res.send({ success: true, id: maxId });
  } catch (err) {
    console.log(err);
    return res.send({ success: false, error: true });
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

    return res.send({ success: true, configs });
  } catch (err) {
    console.log(err);
    return res.send({ success: false, error: true });
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

    return res.send({ success: true });
  } catch (err) {
    console.log(err);
    return res.send({ success: false, error: true });
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

    return res.send({ success: true, url });
  } catch (err) {
    console.log(err);
    return res.send({ success: false, error: true });
  }
};


module.exports.post = create;
module.exports.get = get;
module.exports.success = success;
module.exports.getResult = getResult;
