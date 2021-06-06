<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php
    //connexion Base de données
    include("connexion_base.php");

    //$sql = "SELECT competences FROM metier WHERE id = 1";

   // $req = $link;
    //$req = $link -> prepare($sql);
   // $req -> execute();
   // $competences = $data["competences"];
    ?>
    <link rel="stylesheet" href="styles/peak.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');
    </style>
    <SCRIPT TYPE="text/javascript" SRC="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></SCRIPT>
    <script type="text/javascript" src="peak-app.js"></script>
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