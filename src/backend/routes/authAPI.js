const express = require('express');
const Controller = require('../authGoogle/controller');
const router = express.Router();
const db = require('../Model/dbConnect');
const conn = db.dbConnect;                                                                                                                                                                                                                                                                                                                      

router.get('/api', Controller.listLoginEvents);

//Route pour la sauvegarde de la seance et des participants
router.post('/save',(req, res) =>{
    let id;
    if (req.body) {
      let {seance,participants} = req.body;
      //Recuperation la derniere seance sachant qu'on avait deja inserer la classe et la matiere
      conn.query("SELECT MAX(idSeance) as id FROM Seance", (err, result, fields) => {
        if (err) throw err;
        id = result.id;
        //Mis a jour de la derriere seance avec les données recuperer par l'apigoogle
        conn.query('UPDATE Seance SET idConference = ?, partage = ?, heureFin = ?, dateFin = ? WHERE idSeance = ?', [seance.id, seane.partage, seance.heureFin, seance.dateFin, id], (err, result) => {
            if (err) throw err;
            console.log("nice!");
        });
      });
     //Mis a jour des participants
      for(let i = 0; i < participants.length; i++){
        conn.query('UPDATE Participant SET nombreConnexion = ?, nombreDeconnexion = ?, email = ?, region = ? WHERE nomComplet = ?', [participants[i].nbConnexion, participants[i].nbConnexion, participants[i].email, participants[i].region, participants[i].nomComplet], (err, result) => {
          if (err) throw err;
          console.log(result);    
        });
      }
    }
});

//Route pour inserer la classe et la matiere apres le choix du professeur 
router.post('/saveMatiereEtClasse', (req, res) => {
  if(req.body){
    let {matiere, classe} = req.body;
    conn.query("INSERT INTO Seance (matiere, classe) VALUES (?, ?)", [matiere, classe], (err, result) => {
      if(err) throw err;
      console.log("Inserer avec succes");
    });
  }
});

//Route pour inserer la liste de presence et absence
router.post('/saveListePresence', (req, res) => {
  let idSeance;
  let classeSeance; 
  let matiereSeance; 
  let idParticipant;
  let trouve = false;
  if(req.body){
    let {nomComplet} = req.body;
    //On commence a recuperation la derniere seance
    conn.query("SELECT MAX(idSeance) as id FROM Seance", (err, result, fields) => {
      if (err) throw err;
      idSeance = result.id;
      //La classe de la seance
      classeSeance = result.classe;
      //La matiere de la seance
      matiereSeance = result.matiere;
    });
    //On insère la liste des participants 
    for(let i = 0; i < nomComplet.length; i++){
      conn.query("INSERT INTO Participant (nomComplet) VALUES (?)", [nomComplet[i]], (err, result) => {
        if(err) throw err;
        console.log("Inserer avec succes");
        idParticipant = result.idParticipant;
        //Pour chaque participant, il a assister la seance recuperer ci-dessus
        conn.query("INSERT INTO Assister (idSeance, idParticipant) VALUES ?", [idSeance, idParticipant], (err, result, fields) => {
          if (err) throw err;
          console.log('Bien');
        });
      });
    }
    /*
    * Pour recuperer la liste des absents On a une table 'listetudiants'.
    * Dans la table listetudiants nous avons les etudiants et leurs classe.
    * Pour avoir les absents on recupere les participants et on verifie pour
    * un etudiant donne dans la table 'listetudiants' est ce que il est parmis
    * les participants ? 
    * Si NON alors il est absent 
    */
    //Etape 1 on recupère les etudiant qui sont de la meme classe que celle de la seance
    conn.query("SELECT * FROM Listetudiant WHERE classe = ?",[classeSeance], (err, result, fields) => {
      if (err) throw err;
      let etudiants = result;
      //Etape 2 on verifie pour chaque etudiant si il parmis les presents
      for (let i = 0; i < etudiants.length; i++) {
        for (letj = 0;j < nomComplet.length;j++) {
          if(result.nomComplet == nomComplet[j]){
            trouve = true;
          }
        }
        //Etape 3 Si on ne trouve pas l'etudiant ce que il est absent, 
        //donc on insere l'etudiant et la seance dans la table 'Absence'
        if(!trouve){
          conn.query("INSERT INTO Absence (idParticipant, idSeance) VALUES ?", [etudiants.id, idSeance], (err, result) => {
            if(err) throw err;
            console.log("Arrete de fuir");
          });
        }
        trouve = false;
      }
    });
  }
});

module.exports = router
