const connection = require('../model/dbconnexion');

connection.connect((err) => {
    if(err) 
        console.log(err);
    else
        console.log('connexion dans la base réussie');
    
});

module.exports = connection;