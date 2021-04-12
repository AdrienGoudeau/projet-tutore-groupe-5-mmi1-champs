$( document ).ready(function() {
    $("div").click(function()
    {
        $("div").animate({left: "900px"});
        $("").hide(1000);
        {
            $("div").animate({top: "300px"});
            $("").hide(1000);
            {
                $("div").animate({left: "0px"});
                $("").hide(1000);
                {
                    $("div").animate({top: "0px"});
                }
            }
        }
    });
});