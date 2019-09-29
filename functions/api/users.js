const admin = require('firebase-admin');

const utils = require('./utils');


// noinspection JSUnusedLocalSymbols
const endpointUrl = 'https://us-central1-face-tricks.cloudfunctions.net/api/users';

/**
 * Gets a users' face-merge config history from Firebase
 * @param {Object} req
 * @param {Object} res
 * @return {Promise<>}
 */
const getHistory = async (req, res) => {
  const { id } = req.params;

  try {
    const snapshot = await admin
      .database()
      .ref('users')
      .child(id)
      .child('configs')
      .once('value');

    const configs = snapshot.val() || {};

    const respData = utils.makeResponseResult(null, { configs });

    return res.send(respData);
  } catch (err) {
    console.log(err);
    return res.send(utils.makeResponseResult(err));
  }
};


module.exports.getHistory = getHistory;
