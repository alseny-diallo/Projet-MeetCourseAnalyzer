//modules
const express = require('express');
const app = express();
//const mysql = require('mysql');
//const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config({path : './.env'});


const auth = require('./routes/auth');
const mailing = require('./routes/mailing');
const dbconnect = require('./routes/dbconnect');

//middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//template engine
app.set('views', __dirname + '/html');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '../src'));

//routes
app.use('/',dbconnect);
app.get('/', (req, res) =>{
    res.send('Welcome to server!')    
});    
app.use('/auth', auth);
app.use('/mailing', mailing);
    

//port listening

let port = process.env.PORT;

app.listen(port, (err) => { 
    if(err) console.log(err);
    console.log(`Server working on port ${port}`);
})
