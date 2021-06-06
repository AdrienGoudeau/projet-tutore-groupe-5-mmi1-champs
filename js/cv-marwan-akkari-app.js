$(document).ready(function() {
    var infoPos = 0;
    $(".goRight").on('click', function()
    {
        if (infoPos != 3)
        {
            $(".bottom-container").transition({x:'-=100vw'},1000,'ease');
            infoPos += 1;
        }
        else
        {
            $(".bottom-container").transition({x:'0vw'},1000,'ease');
            infoPos = 0;
        }
    })
    $(".goLeft").on('click', function()
    {
        if (infoPos != 0)
        {
            $(".bottom-container").transition({x:'+=100vw'},1000,'ease');
            infoPos -= 1;
        }
        else
        {
            $(".bottom-container").transition({x:'-300vw'},1000,'ease');
            infoPos = 3;
        }
    })
})