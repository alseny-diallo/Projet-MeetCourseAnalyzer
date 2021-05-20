<?php
    include('./evolutionSeance.php');
    $req = "SELECT nomSeance,note FROM Formulaire  JOIN Seance ON Formulaire.idSeance = Seance.idSeance order by  Seance.nomSeance asc";
    dataChart($req);
?>