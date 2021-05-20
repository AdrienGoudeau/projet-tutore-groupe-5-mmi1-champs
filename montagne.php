<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <?php
    $nom_metier="";
    //connexion Base de données
    $link = new PDO('mysql:host=sqletud.u-pem.fr;dbname=agoudeau_db', 'root', '', array
(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    //recupèrez l'id du metier dans l'url ... montagne.php?id=18 (variable en GET)
    $id = ... 
    //envoi requete SQL
    //SELECT ... 
    //WHERE id=18 

    //WHILE $data=... 
    $nom_metier=$data["nom"];
    
    
    ?>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Montagne <?php echo($nom_metier);?></title>
</head>
<body>
    <h1>Montagne <?php echo($nom_metier);?></h1>
    <section class="panneau salaire">
        <h2>Salaire</h2>
        2500€
    </section>
    <section class="panneau competence">
        <h2>Compétence</h2>
        HTML, CSS, dév web
    </section>
</body>
</html>