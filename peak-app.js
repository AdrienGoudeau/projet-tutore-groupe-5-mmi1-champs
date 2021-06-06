$(document).ready(function() {
    
    var ileIndex = localStorage.getItem("ileStorage");
    var mtnIndex = localStorage.getItem("mtnStorage");
    var localMtnIndex = localStorage.getItem("localMtnStorage");
    console.log("n° ile: " + ileIndex, "   montagne: " + mtnIndex, "   montagne local: " + localMtnIndex);
    switch (localMtnIndex)
    {
        case "1": $(".mountain").attr("src","images/montagne-blue.svg"); break;
        case "2": $(".mountain").attr("src","images/montagne-purple.svg"); break;
        case "3": $(".mountain").attr("src","images/montagne-green.svg"); break;
        case "4": $(".mountain").attr("src","images/montagne-orange.svg"); break;
        case "5": $(".mountain").attr("src","images/montagne-yellow.svg"); break;
        default: $(".mountain").attr("src","images/montagne-purple.svg"); break;
    }
    // $(".etude, .mission, .competence, .definition").on("click", function()
    // {
    //     $(".textbox").toggle();
    // });

    $(".etude, .mission, .competence, .definition").on("click",function(){
        var cat = null;
        if($(this).hasClass("etude")){
            cat = "salaire";
            console.log("api.php?mtn="+mtnIndex+"&cat="+cat);
        }
        if($(this).hasClass("mission")){
            cat = "mission";
            console.log("api.php?mtn="+mtnIndex+"&cat="+cat);
        }
        if($(this).hasClass("competence")){
            cat = "competences";
            console.log("api.php?mtn="+mtnIndex+"&cat="+cat);
        }
        if($(this).hasClass("definition")){
            cat = "definition";
            console.log("api.php?mtn="+mtnIndex+"&cat="+cat);
        }
        $.get("api.php?mtn="+mtnIndex+"&cat="+cat).done(function(data){
            // Récupération des résultats de la requête
            var i=0;
            while(i<data.length){
            $("#textbox").html("");
            $("#textbox").append(data);
            i++;
            }
        })
    })
})