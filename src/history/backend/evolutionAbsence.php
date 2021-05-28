<?php
    include('./evolutionSeance.php');
    include('./session.php');
    if (!empty($classe) and !empty($matiere)){
        $req = "select Participant.idParticipant,nomComplet,jour from Participant join Absence on Participant.idParticipant=Absence.idParticipant where datediff(now(),jour)>=7;";
        dataChart($req);
    }    
?>