const redis = require('../redis');


module.exports = async (req, res) => {
  try {
    let ping = await redis.getAsync('ping');

    if (ping === null) {
      ping = 0;
      redis.set('ping', ping);
    }

    redis.incr('ping');

    return res.send({ result: ping });
  } catch (err) {
    console.log(err);
    return res.send({ error: true });
  }
};
