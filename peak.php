<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php
    $nom_metier="";
    $salaire="";
    //connexion Base de données
    $link = new PDO('mysql:host=sqletud.u-pem.fr;dbname=agoudeau_db', 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    ?>
    <link rel="stylesheet" href="styles/peak.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');
    </style>
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/jquery.transit.min.js"></script>
    <script type="text/javascript" src="js/peak-app.js"></script>
    <title>Montagne</title>
</head>
<body>
    <img class="mountain">
    <div class="etude"></div>
    <div class="mission"></div>
    <div class="competence"></div>
    <div class="definition"></div>
    <div class="textbox"></div>
    <p src="mtn-data"></p>
</body>
</html>