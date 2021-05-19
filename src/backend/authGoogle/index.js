const controller = require("./controller");
const express = require('express');
const app = express();
//let router = express.Router()
//router.get("/",controller.listLoginEvents)
const port = 5000;
const listLoginEvents = controller.listLoginEvents
module.exports = {
    listLoginEvents
}