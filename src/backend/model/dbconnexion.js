
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user: 'adminSystem',
    password: 'Passer',
    database: 'GoogleMeetProject'

});

module.exports = connection;