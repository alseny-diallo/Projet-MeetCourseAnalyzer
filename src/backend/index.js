const bodyParser= require('body-parser');
const dbconnection = require('./controller/controller');
const morgan = require('morgan');
const app = require('express')();

app.set('view engine','ejs');
app.set('views','./views');

//use middlewear body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('tiny'));

app.get('/',(req,res)=>{

    dbconnection.query('SELECT * FROM Etudiant',(error,result) => {
        if (error)  throw error;

        const resultat = result;
      
        res.render('liste',{
            title: 'liste presence',
            resultat: resultat
        });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        
    });
});

app.listen(3000);