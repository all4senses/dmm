(function ($) {

  Drupal.behaviors.dmm_mainMenuBlocks = {
    attach: function (context, settings) {
       
       $( "#tabs" )
       .tabs({
          event: "mouseover"
        })
       .addClass( "ui-tabs-vertical ui-helper-clearfix" );
       
       $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
       
       console.log('blocks test!');
       
    }
  };

}(jQuery));
