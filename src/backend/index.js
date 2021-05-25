//server expressjs (backend)
//modules
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
dotenv.config({path : './.env'})

const auth = require('./routes/auth')
const mailing = require('./routes/mailing')
const liste = require('./routes/liste')
//const api = require('./routes/authAPI')
const dbconnect = require('./routes/dbconnect')

//middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//template engine
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

//routes

app.use('/',dbconnect)
app.use('/auth', auth)
app.use('/mailing', mailing)
app.use('/liste', liste)

app.get('/', (req, res) =>{
 res.send('Welcome to server!')
})

// config port d'écoute
let port = process.env.PORT

app.listen(port, (err) => { 
    if(err) console.log(err)
    console.log(`Server working on port ${port}`)
})
