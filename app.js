$( document ).ready(function() {
    $("div").click(function()
    {
        $("div").animate({marginLeft: "300px"});
        $("").hide(1000);
        {
            $("div").animate({marginTop: "300px"});
            $("").hide(1000);
            {
                $("div").animate({marginLeft: "0px"});
                $("").hide(1000);
                {
                    $("div").animate({marginTop: "0px"});
                }
            }
        }
    });
});