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
         var e = event || window.event;
         e.preventDefault();
         e.stopPropagation();
//         if(e.preventDefault){
//            e.preventDefault();
//         }else{
//            e.returnValue = false; 
//         };
         return false; 
        });
       
       console.log('blocks test!');
       
    }
  };

}(jQuery));
