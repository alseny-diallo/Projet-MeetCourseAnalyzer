const express = require('express');
const db = require('../Model/dbConnect');
const controller = db.dbConnect;

const router = express.Router();

router.get('/',(req,res)=>{

    controller.query('SELECT * FROM Etudiant',(error,result) => {
        if (error)  throw error;

        const resultat = result;
      
        res.render('liste',{
            title: 'liste presence',
            resultat: resultat
        });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        
    });
});

module.exports = router;