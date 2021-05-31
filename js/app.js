$(document).ready(function() {
    $(document).mousedown(function(e){
        if(e.which === 2 ){ 
           return false; // Or e.preventDefault()
        }
    });
    $(".ileAudio").on("click",function()
    {
        $(".iles").transition({x:'-100vw'},1000,'ease');
    })
    $(".ileDesign").on("click",function()
    {
        $(".iles").transition({x:'0'},1000,'ease');
    })
});