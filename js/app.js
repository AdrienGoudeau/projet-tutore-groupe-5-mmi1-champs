$(document).ready(function() {
    $(document).mousedown(function(e){
        if(e.which === 2 ){ 
           return false; // Or e.preventDefault()
        }
    });
    var ileIndex = 0;
    $(".scrollLeft").on("click",function()
    {
        if (ileIndex != 0)
        {
            $(".iles").transition({x:'+=100vw'},1000,'ease');
            ileIndex -= 1;
        }
    })
    $(".scrollRight").on("click",function()
    {
        if (ileIndex != 3)
        {
            $(".iles").transition({x:'-=100vw'},1000,'ease');
            ileIndex += 1;
        }
    })
});