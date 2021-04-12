$( document ).ready(function() {
    $( "img" ).click(function() {
        $( "img" ).animate({
          width: ["toggle", "swing"]
        });
      });
  });