$(document).ready(function() {
    $(document).mousedown(function(e){
        if(e.which === 2 ){ 
           return false; // Or e.preventDefault()
        }
    });
    var ileIndex = 0;
    var mtnIndex = 1;
    var localMtnIndex = 1;
    var compShow = 1;
    //scroll horizontal
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
    //boussole
    $(".compass").on("click",function()
    {
        switch(compShow)
        {
            case 0:
                $(".north, .south, .east, .west").show();
                $(".north, .south, .east, .west").transition({
                    opacity:'1'
                },500,'ease');
                compShow = 1;
                break;
            case 1:
                $(".north, .south, .east, .west").transition({
                    opacity:'0'
                },500,'ease');
                setTimeout(function(){
                    $(".north, .south, .east, .west").hide();
                }, 500);
                compShow = 0;
                break;
        }
    })
    $(".west").on("click",function()
    {
        $(".iles").transition({x:'0vw'},1000,'ease');
        ileIndex = 0;
    })
    $(".north").on("click",function()
    {
        $(".iles").transition({x:'-100vw'},1000,'ease');
        ileIndex = 1;
    })
    $(".east").on("click",function()
    {
        $(".iles").transition({x:'-200vw'},1000,'ease');
        ileIndex = 2;
    })
    $(".south").on("click",function()
    {
        $(".iles").transition({x:'-300vw'},1000,'ease');
        ileIndex = 3;
    })
    //obtient le numéro de la montagne lors du clic
    $(".peak1").on("click",function()
    {
        mtnIndex = $(this).index() - 3;
    });
    $(".peak2").on("click",function()
    {
        mtnIndex = $(this).index() + 1;
    });
    $(".peak3").on("click",function()
    {
        mtnIndex = $(this).index() + 6;
    });
    $(".peak4").on("click",function()
    {
        mtnIndex = $(this).index() + 11;
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