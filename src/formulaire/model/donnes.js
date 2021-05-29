let mysql = require('mysql');
let connection = mysql.createConnection({
  host     : 'us-cdbr-east-03.cleardb.com',
  user     : 'bab5367d6254fb',
  password : '780c8db3',
  database : 'heroku_240b39d0a2f9f7c',
  port     : 3306,
  insecureAuth : true
});


class Donnes {
  static create(reponseForm, note, commentaireForm, cb){
	connection.query('INSERT INTO Formulaire SET reponseForm = ?, note = ?, commentaireForm = ?', [reponseForm, note, commentaireForm], (err, result) => {
	  if (err) throw err
	  cb(result)
	});
  }

}

module.exports = Donnes




// let mysql = require('mysql');
// let dbConfig = {
//   host     : 'us-cdbr-east-03.cleardb.com',
//   user     : 'bab5367d6254fb',
//   password : '780c8db3',
//   database : 'heroku_240b39d0a2f9f7c',
//   port     : 3306,
//   insecureAuth : true
// };

// let _conn = mysql.createConnection(dbConfig);

// let pool = mysql.createPool(dbConfig);


// class Donnes {

//     pool.on('connection', function (_conn) {
//         if(_conn){
//             logger.info('Connected the database via threadId %d!!', _conn.threadId);
//             static create(reponseForm, note, commentaireForm, cb){
//                 _conn.query('INSERT INTO Formulaire SET reponseForm = ?, note = ?, commentaireForm = ?', [reponseForm, note, commentaireForm], (err, result) => {
//                     if (err) throw err
//                     cb(result)
//                 });
//             }
//         }
//     });
// }

// module.exports = Donnes


