const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const functions = require('firebase-functions');

const ping = require('./ping');


const app = express();

app.use(cors({ origin: true }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// build multiple CRUD interfaces:
app.get('/ping', ping);


module.exports = functions.https.onRequest(app);
