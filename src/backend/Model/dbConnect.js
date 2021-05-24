//Connexion à la bd 
const mysql = require('mysql');
const express = require('express');

const router = express.Router();

//configuration de options de connexion à la bd

const dbConnect = mysql.createConnection({
  host: process.env.DB_HOST,
  port : process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

dbConnect.connect( (err) => {
  if (err) {
    console.error('Erreur de connection! '+ err.message);
    return;
}
  console.log("Connected");
});

module.exports = {router:router, dbConnect:dbConnect};