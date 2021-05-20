const mysql = require('mysql');
const express = require('express');

const router = express.Router();


const dbConnect = mysql.createConnection({
  host: process.env.HOST,
  port : process.env.DB_PORT,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DATABASE,
  insecureAuth: true
});

dbConnect.connect( (err) => {
  if (err) {
    console.error('Erreur de connection! '+ err.message);
    return;
}
  console.log("Connected");
});

module.exports = {router:router, dbConnect:dbConnect};