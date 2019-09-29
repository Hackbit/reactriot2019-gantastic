const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const functions = require('firebase-functions');

const faces = require('./faces');
const users = require('./users');


const app = express();

app.use(cors({ origin: true }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// ========
// faces endpoints
// ========

// result
app.get('/faces/:id/result', faces.getResult);

// result progress
app.get('/faces/:id/progress', faces.getResultProgress);

// get a faces-merge config
app.get('/faces/:id', faces.get);

// post a success result
app.post('/faces/:id', faces.success);

// post a new config
app.post('/faces', faces.post);

// ========
// users endpoints
// ========

// get a users's faces-merge config history
app.get('/users/:id/history', users.getHistory);


module.exports = functions.https.onRequest(app);
