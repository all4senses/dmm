(function ($) {

  Drupal.behaviors.dmm_mainMenuBlocks = {
    attach: function (context, settings) {
       
       $( ".block-om-maximenu .tabs" )
       .tabs({
          event: "mouseover"
        })
       .addClass( "ui-tabs-vertical ui-helper-clearfix" );
       
       $( ".block-om-maximenu .tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
       
       $( ".block-om-maximenu .tabs li a" ).click(function(event){
         var e = event || window.event;
         e.preventDefault();
         e.stopPropagation();
////         if(e.preventDefault){
////            e.preventDefault();
////         }else{
////            e.returnValue = false; 
////         };
//         
            //event.preventDefault(); // stop browser from following href
//            var url = $(this).attr('href'); // get href
//            var hash = url.split('#'); // get the hash-part
//            if(hash.length > 1) location.hash = hash[1]; // rewrite the url
            return false; 
        });
       
       //console.log('blocks test!');
       
    }
  };

}(jQuery));
