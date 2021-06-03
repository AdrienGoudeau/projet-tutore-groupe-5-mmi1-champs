$(document).ready(function() {
    $(document).mousedown(function(e){
        if(e.which === 2 ){ 
           return false; // Or e.preventDefault()
        }
    });
    var ileIndex = 0;
    var mtnIndex = 0;
    $(".scrollLeft").on("click",function()
    {
        if (ileIndex != 0)
        {
            $(".iles").transition({x:'+=100vw'},1000,'ease');
            ileIndex -= 1;
        }
        else
        {
            $(".iles").transition({x:'-=300vw'},1000,'ease');
            ileIndex = 3;
        }
    })
    $(".scrollRight").on("click",function()
    {
        if (ileIndex != 3)
        {
            $(".iles").transition({x:'-=100vw'},1000,'ease');
            ileIndex += 1;
        }
        else
        {
            $(".iles").transition({x:'+=300vw'},1000,'ease');
            ileIndex = 0;
        }
    })
    $(".peak1, .peak2, .peak3, .peak4").on("click",function()
    {
        // localStorage.setItem("ileIndexStorage", ileIndex);
        console.log($(this).css('transform'));
    });
    // $(".peak1").on("click",function()
    // {
    //     $(".ileAudio").transition({width:'600vw'},1000,'ease');
    // });
});