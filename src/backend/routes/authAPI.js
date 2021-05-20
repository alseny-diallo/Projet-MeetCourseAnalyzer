const express = require('express');
const Controller = require('../authGoogle/controller');

const router = express.Router();

router.get('/api', Controller.listLoginEvents);

module.exports = router;