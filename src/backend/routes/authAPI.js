const express = require('express');
const Controller = require('../authGoogle/controller');
const router = express.Router();
const db = require('../Model/dbConnect');
const conn = db.dbConnect;
let id;
router.get('/api', Controller.listLoginEvents);

//Sauvegarge de la seance et des participants
router.post('/save',(req, res) =>{
    if (req.body) {
      let {seance,participants} = req.body;
      //Recuperation la derniere seance
      conn.query("SELECT MAX(idSeance) as id FROM Seance", (err, result, fields) => {
        if (err) throw err;
        id = result.id;
        //Mis a jour de la derriere seance
        conn.query('UPDATE Seance SET idConference = ?, partage = ?, heureFin = ?, dateFin = ? WHERE idSeance = ?', [seance.id, seane.partage, seance.heureFin, seance.dateFin, id], (err, result) => {
            if (err) throw err;
            console.log("nice!");
        });
      });
      /*
      On recupere les participants
      .  conn.query("SELECT nomComplet FROM Seance", (err, result, fields) => {
      .      
      .
      */
     //Mis a jour des participants
      for(let i = 0; i < participants.length; i++){
        conn.query('UPDATE Participant SET nombreConnexion = ?, nombreDeconnexion = ?, email = ?, region = ? WHERE nomComplet = ?', [participants[i].nbConnexion, participants[i].nbConnexion, participants[i].email, participants[i].region, participants[i].nomComplet], (err, result) => {
          if (err) throw err;
          console.log(result);    
        });
      }
    }
});

module.exports = router;