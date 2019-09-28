const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const functions = require('firebase-functions');

const faces = require('./faces');


const app = express();

app.use(cors({ origin: true }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// faces endpoints
app.get('/faces/:id/result', faces.getResult);
app.get('/faces/:id', faces.get);
app.post('/faces/:id', faces.success);
app.post('/faces', faces.post);

module.exports = functions.https.onRequest(app);
