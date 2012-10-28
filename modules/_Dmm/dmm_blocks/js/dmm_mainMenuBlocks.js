(function ($) {

  Drupal.behaviors.dmm_mainMenuBlocks = {
    attach: function (context, settings) {
       
       $( "#tabs" ).tabs();
       console.log('blocks test!');
       
    }
  };

}(jQuery));
