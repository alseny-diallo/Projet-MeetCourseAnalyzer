const express = require("express");
const Controller = require("../authGoogle/controller");
const router = express.Router();
const db = require("../Model/dbConnect");
const conn = db.dbConnect;

let id;

//call API

router.get("/api", Controller.listLoginEvents);

//Sauvegarge de la seance et des participants
router.post("/savedata", (req, res) => {
  if (req.body) {
    let {
      seance,
      participants
    } = req.body;

    //Recuperation la derniere seance
    conn.query("SELECT MAX(idSeance) as id FROM Seance", (err, result, fields) => {
      if (err) throw err;

      id = result.id;

      //Mis a jour de la derriere seance
      conn.query("UPDATE Seance SET idConference = ?, partage = ?, heureFin = ?, dateFin = ? WHERE idSeance = ?", [seance.id, seane.partage, seance.heureFin, seance.dateFin, id], (err, result) => {
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
    for (let i = 0; i < participants.length; i++) {
      conn.query("UPDATE Participant SET nombreConnexion = ?, nombreDeconnexion = ?, email = ?, region = ? WHERE nomComplet = ?",
        [
          participants[i].nbConnexion,
          participants[i].nbConnexion,
          participants[i].email,
          participants[i].region,
          participants[i].nomComplet,
        ],
        (err, result) => {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  }

  //get date_heure_classe_matiere

  router.get("/savechoice", (req, res) => {
    console.log("wassup")
    res.send("working!!!!")
  })

  router.post("/savechoice", (req, res) => {
    if (req.body) {

      let {
        dateDebut,
        timeDebut,
        matiere,
        classe
      } = req.body;

      console.log(req.body);

      return res.status(200);
      /*conn.query(
        "INSERT INTO seance VALUES () where dateDebut = ? AND heureDebut = ? AND matiere = ? AND classe = ?",
        [dateDebut, timeDebut, matiere, classe],
        (err, results) => {
          if (err) throw err;

          if (results.length) {
            console.log(results);
            return res.status(200);
          } else if (!results.length) {
            console.log(results);
            return res.status(404);
          }
        }
      );*/
    }
  });


});

module.exports = router;