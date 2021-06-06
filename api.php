<?php
// Appel de l'API : api.php?mtn=b&cat=a
header('Content-Type: application/json');
// Connexion à la base de données
$link = new PDO('mysql:host=localhost;dbname=projet_tut_2021', 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

// Récupérer la requête transmise en GET
$mtn = "";
if(isset($_GET["mtn"])){
    $mtn = $_GET["mtn"];
}
    $sql = "SELECT mission FROM metier WHERE id = :mtn;";
    // On prépare la requête avant l'envoi :
    $req = $link -> prepare($sql);
    // On exécute la requête en insérant la valeur transmise en GET
    $req -> execute(array(":mtn" => $mtn));
    // On récupère les résultats de la requête dans un tableau associatif
    $data = $req -> fetchAll();
    echo(json_encode($data));
?>