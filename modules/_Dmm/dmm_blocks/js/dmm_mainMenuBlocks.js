(function ($) {

  Drupal.behaviors.dmm_mainMenuBlocks = {
    attach: function (context, settings) {
       
       $( ".tabs" )
       .tabs({
          event: "mouseover"
        })
       .addClass( "ui-tabs-vertical ui-helper-clearfix" );
       
       $( ".tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
       
       $( ".tabs li a" ).click(function(event){
//         var e = event || window.event;
//         e.preventDefault();
//         e.stopPropagation();
////         if(e.preventDefault){
////            e.preventDefault();
////         }else{
////            e.returnValue = false; 
////         };
//         return false; 
            event.preventDefault(); // stop browser from following href
            var url = $(this).attr('href'); // get href
            var hash = url.split('#'); // get the hash-part
            if(hash.length > 1) location.hash = hash[1]; // rewrite the url
        });
       
       console.log('blocks test!');
       
    }
  };

}(jQuery));
