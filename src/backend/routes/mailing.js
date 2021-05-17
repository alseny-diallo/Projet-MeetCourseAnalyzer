const express = require('express');
const Controller = require('../Controller/mailController');

const router = express.Router();
const app = express();

app.get('/', Controller.sendMail);

module.exports = router;