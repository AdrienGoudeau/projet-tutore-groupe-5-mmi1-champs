$(document).ready(function() {
    $(".menu1").click(function() {
        $('html,body').animate({
            scrollTop: $(".Mountain").offset().top},
            'slow');
    });
    $(".menu2").click(function() {
        $('html,body').animate({
            scrollTop: $(".Welcome").offset().top},
            'slow');
    });
    $(".menu3").click(function() {
        $('html,body').animate({
            scrollTop: $(".Team").offset().top},
            'slow');
    });
    $(".menu4").click(function() {
        $('html,body').animate({
            scrollTop: $(".Start").offset().top},
            'slow');
    });
    $(".menu5").click(function() {
        $('html,body').animate({
            scrollTop: $(".Contact").offset().top},
            'slow');
    });
});