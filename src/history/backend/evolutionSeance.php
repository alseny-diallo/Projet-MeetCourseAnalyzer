<?php
    function dataChart($req){
        //paramettre  entete json
        header('Content-Type: application/json');
        //paramettre d'acces a la base de donnees
        define('DB_HOST','us-cdbr-east-03.cleardb.com');
        define('DB_USERNAME','bab5367d6254fb');
        define('DB_PASSWORD','780c8db3');
        define('DB_NAME','heroku_240b39d0a2f9f7c');

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