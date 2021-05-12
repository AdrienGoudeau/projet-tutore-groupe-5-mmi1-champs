$(document).ready(function() {
    $(document).mousedown(function(e){
        if(e.which === 2 ){ 
           return false; // Or e.preventDefault()
        }
    });
    $("img").velocity({
        width: "100vw",
        height: "100vh",
        top: "0vh"
    },{
          duration: 1000,
          easing: "ease-in-out"
    })
    $("img").click(function()
    {
        $("img").velocity({
            width: "170vw",
            height: "170vh",
            top: "-50vh"
            },{
              duration: 1000,
              easing: "ease-in-out"
            })
    })
});