(function ($) {

  Drupal.behaviors.dmm_loginToCommentLink = {
    attach: function (context, settings) {
       
       $( ".login-to-comment a" ).click(function(event){
         alert('Click!');
        });
       
       //console.log('blocks test!');
       
    }
  };

}(jQuery));
