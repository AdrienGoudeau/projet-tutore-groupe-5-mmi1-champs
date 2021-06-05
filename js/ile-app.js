$(document).ready(function() {
    $(document).mousedown(function(e){
        if(e.which === 2 ){ 
           return false; // Or e.preventDefault()
        }
    });
    var ileIndex = 0;
    var mtnIndex = 1;
    var localMtnIndex = 1;
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
    $(".peak1").on("click",function()
    {
        mtnIndex = $(this).index() - 1;
    });
    $(".peak2").on("click",function()
    {
        mtnIndex = $(this).index() + 3;
    });
    $(".peak3").on("click",function()
    {
        mtnIndex = $(this).index() + 8;
    });
    $(".peak4").on("click",function()
    {
        mtnIndex = $(this).index() + 13;
    });
    $(".peak1, .peak2, .peak3, .peak4").on("click", function()
    {
        localMtnIndex = $(this).index() - 3;
        localStorage.setItem("mtnStorage", mtnIndex);
        localStorage.setItem("localMtnStorage", localMtnIndex);
        localStorage.setItem("ileStorage", ileIndex);
        window.location.href = "peak.php";
    });
});