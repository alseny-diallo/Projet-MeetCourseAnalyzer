const mysql = require('mysql');
const express = require('express');

const router = express.Router();


const dbConnect = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE 
});

dbConnect.connect( (err) => {
  if (err) {
    console.error('Erreur de connection! '+ err.stack);
    return;
}
  console.log("Connected");
});

module.exports = {router:router, dbConnect:dbConnect};