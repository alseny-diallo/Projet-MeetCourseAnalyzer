//modules
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');

const app = express();
dotenv.config({path : './.env'});

const auth = require('./routes/auth');


//middlewares
app.use(app.urlencoded({extended: false}));
app.use(app.json());
app.use(morgan('tiny'));

//routes
app.use('/', auth);


//port listening
const port = process.env.PORT || 3000;

app.listen(port, (err) => { 
    if(err) console.log(err);
    console.log(`Server working on port ${port}`);
})