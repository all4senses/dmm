(function ($) {

  Drupal.behaviors.dmm_loginToCommentLink = {
    attach: function (context, settings) {
       
       $( ".login-to-comment a" ).click(function(event){
         
         
          $.ajax({
            //dataType: "jsonp",
            url: "/comments-fragment"
            //,cache: false,
//            data: {
//                    lang: 'en'
//                  },
//            success: function(data){ 
//
//                  }
          });


          alert('Click!');
         
         
        });
       
       //console.log('blocks test!');
       
    }
  };

}(jQuery));
