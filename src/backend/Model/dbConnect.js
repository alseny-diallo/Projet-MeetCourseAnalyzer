const mysql = require('mysql');
const express = require('express');

const router = express.Router();

const dbConnect = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

dbConnect.connect( (err) => {
  if (err) {
    console.error('Erreur de connection! '+ err.stack);
    return;
}
  console.log("Connected");
});

module.exports = {router:router, dbConnect:dbConnect};