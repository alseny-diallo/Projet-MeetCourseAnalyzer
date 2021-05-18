<?php
    include('./evolutionSeance.php');
    $req ="SELECT idEtudiant,nom,prenom,nombreDeconnexion FROM Etudiant;";
    dataChart($req);
?>