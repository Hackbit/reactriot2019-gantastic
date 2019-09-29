const admin = require('firebase-admin');

const api = require('./api');


admin.initializeApp();


exports.api = api;
