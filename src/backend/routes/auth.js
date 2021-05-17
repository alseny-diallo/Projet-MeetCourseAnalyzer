const { json } = require('body-parser');
const express = require('express');
const db = require('../Model/dbConnect');
const controller = db.dbConnect;

const router = express.Router();


router.get('/', (req, res) =>{
res.send('hello');
});

router.post('/',(req, res) =>{

  if (req.body) {

    console.log(req.body);

    let {login,password} = req.body;
      
    controller.query('SELECT * FROM Prof WHERE identifiant = ? AND mdpasse = ?', [login,password], (err, result) => {

      if (err) throw err;
  
      if (result.length) {
        console.log(result);
        return res.status(200).send({message:"Bienvenue!"});
        
      } else if (!result.length) {
          console.log("Ce prof n'existe pas!");
          return res.status(404).send({message:"404 ERROR!"});
      }

    })

}

});

module.exports = router;