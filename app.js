$(document).ready(function() {
    $(document).mousedown(function(e){
        if(e.which === 2 ){ 
           return false; // Or e.preventDefault()
        }
    });
    $('ileDesign').velocity({
        width: "100vw",
        height: "100vh",
        top: "0vh"
    },{
          duration: 1000,
          easing: "ease-in-out"
    })
    $('ileDesign').click(function()
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