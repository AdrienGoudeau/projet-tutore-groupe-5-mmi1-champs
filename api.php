<?php
// Appel de l'API : api.php?requete=the
header('Content-Type: application/json');

// Connexion à la base de données
$link = new PDO('mysql:host=localhost;dbname=projet_tut_2021', 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

// Récupérer la requête transmise en GET
$requete = "";
if(isset($_GET["requete"])){
    $requete = $_GET["requete"];
}

if($requete == ""){
    echo "[]";
} else {
    // Requête pour sélectionner les chansons qui correspondent aux mots envoyés à l'API
    // (recherche sensible à la casse)
    $sql = "SELECT id, nom FROM mu_chanson WHERE nom LIKE BINARY :requete;";
    // On prépare la requête avant l'envoi :
    $req = $link -> prepare($sql);
    // On exécute la requête en insérant la valeur transmise en GET
    $req -> execute(array(":requete" => "%".$requete."%"));
    // On récupère les résultats de la requête dans un tableau associatif
    $data = $req -> fetchAll();
    echo(json_encode($data));
}

?>