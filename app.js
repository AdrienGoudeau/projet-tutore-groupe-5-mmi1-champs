$( document ).ready(function() {
    $("div").click(function()
    {
        $("div").animate({left: "25vw"});
        $("").hide(1000);
        {
            $("div").animate({top: "25vh"});
            $("").hide(1000);
            {
                $("div").animate({left: "0vw"});
                $("").hide(1000);
                {
                    $("div").animate({top: "0vh"});
                }
            }
        }
    });
});