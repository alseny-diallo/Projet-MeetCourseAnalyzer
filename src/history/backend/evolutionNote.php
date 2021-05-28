<?php
    include('./evolutionSeance.php');
    include('./session.php');
    if (!empty($classe) and !empty($matiere)) {
        $req = "SELECT Seance.idSeance as numSeance,note FROM Formulaire  JOIN Seance ON Formulaire.idSeance = Seance.idSeance WHERE classe ='$classe' and matiere = '$matiere' order by  Seance.matiere asc;";
        dataChart($req);
    }
?>