const app = require('express');
const mysql = require('mysql');

const router = express.Router();


const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE 
});

const dbcon = db.connect( (err) => {
    if (err) console.log(err) ;
    console.log("Connected");
  });


const login = (req, res) => {

    const {identifiant, mdpasse} = req.body;
    
    db.query('SELECT * FROM Prof WHERE idProf = ? AND mdpasse = ?', [identifiant,mdpasse], (err, result) => { 
      if (err) console.log(err);
      if (result.length > 0) {
        res.send(result);
      } else if(result.length = 0) {
        console.log("Ce prof n'existe pas!");
      }
    });
}

exports.db = db;
exports.dbcon = dbcon;
exports.login = login;