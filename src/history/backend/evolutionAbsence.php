<?php
    include('./evolutionSeance.php');
    $req = "select Etudiant.idEtudiant,prenom,nom,count(jour) as day from Etudiant join Absence on Etudiant.idEtudiant=Absence.idEtudiant where datediff(now(),jour)>=7 group by Absence.idEtudiant";
    dataChart($req);
?>