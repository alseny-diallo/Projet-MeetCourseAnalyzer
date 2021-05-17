const express = require('express');
const Controller = require('../Model/dbConnect');

const router = express.Router();

router.get('/', Controller.router);

module.exports = router;