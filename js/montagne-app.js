$(document).ready(function() {
    var ileIndex = localStorage.getItem("ileStorage");
    var mtnIndex = localStorage.getItem("mtnStorage");
    var localMtnIndex = localStorage.getItem("localMtnStorage");
    console.log(ileIndex, mtnIndex, localMtnIndex);
    switch (localMtnIndex)
    {
        case "1": $(".mountain").attr("src","images/montagne-purple.svg"); break;
        case "2": $(".mountain").attr("src","images/montagne-blue.svg"); break;
        case "3": $(".mountain").attr("src","images/montagne-green.svg"); break;
        case "4": $(".mountain").attr("src","images/montagne-orange.svg"); break;
        case "5": $(".mountain").attr("src","images/montagne-yellow.svg"); break;
        default: $(".mountain").attr("src","images/montagne-purple.svg"); break;
    }
});