<?php
    include('./evolutionSeance.php');
    include('./session.php');
    if (!empty($classe) and !empty($matiere)){
        $req ="SELECT idEtudiant,nom,prenom,nombreDeconnexion FROM Participant;";
        dataChart($req);
    }
?>