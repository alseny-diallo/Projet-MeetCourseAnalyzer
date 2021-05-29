let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let session = require('express-session')
let router = express.Router();
let port = process.env.PORT || 3000;


//
app.set('view engine','ejs')


//
app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
  secret: 'KKKKKK',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', (request, response) => {
  response.render('pages/index' )
});

app.post('/', (request, response) => {
  console.log(request.body)
  console.log("______________")
  console.log(request.body.reponseForm.reponseForm)
  let donnes = require('./model/donnes')
  donnes.create(request.body.reponseForm.reponseForm, request.body.note.note, request.body.commentaireForm.commentaireForm, function () {
    console.log("Succes enregistre !")
  })
});


//app.listen(3000);
app.listen(port, () => {
  console.log('Ecoute sur le port '+port);
});



