<?php
    function dataChart($req){
        //paramettre  entete json
        header('Content-Type: application/json');
        //paramettre d'acces a la base de donnees
        define('DB_HOST','localhost');
        define('DB_USERNAME','adminSystem');
        define('DB_PASSWORD','Passer');
        define('DB_NAME','GoogleMeetProject');

        //connexion a la base
        $mysqli = new mysqli(DB_HOST,DB_USERNAME,DB_PASSWORD,DB_NAME);
        if (!$mysqli) {
            die("Echec de la connexion: ".$mysqli->error);
        }
        
        //requete recuparation note 
        $query = sprintf($req);

        //execution de la requette
        $result = $mysqli->query($query);

        //bouclage des donnees a returner
        $data = array();
        foreach ($result as $row){
            $data[] = $row;
        }

        //fermer la requette
        $result->close();
        //fermer la connexion
        $mysqli->close();
        //affichage des données sous le format json
        print json_encode($data);
    }
?>