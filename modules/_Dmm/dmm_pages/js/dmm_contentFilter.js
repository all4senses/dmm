(function ($) {

  Drupal.behaviors.dmm_contentFilter = {
    attach: function (context, settings) {
       
      $(".chzn-select").chosen({allow_single_deselect:true});
       
      if (!$("#select-authors").val()) {
        $("#goToAuthorPage").hide();
      }
      else {
        $("#goToAuthorPage").show();
      }
       
      query_opened = false;
      source_param_string = '';
      final_param_string = '';
      var params = {};
      
      // console.log('top.location.href = ' + decodeURIComponent(top.location.href));
      // 'onChange' => "top.location.href='http://getvoip.com/" . $_GET['q'] . "?provider=' + encodeURIComponent(document.getElementById('select_provider').options[document.getElementById('select_provider').selectedIndex].value) + '$url'"),

      current_query = location.search;
      //console.log('current_query = ' + current_query);
      
      if (current_query) {
          var parts = current_query.substring(1).split('&');

          for (var i = 0; i < parts.length; i++) {
              var nv = parts[i].split('=');
              if (!nv[0]) continue;
              params[nv[0]] = nv[1] || true;
          }
      }

      
      for (p in params) {
        // Take out 'tags' and 'author' params from a query.
        if (p != 'tags' && p != 'author') {
          source_param_string = source_param_string + (source_param_string ? '&' : '?') + p + '=' + params[p];
        }
        query_opened = true;
      }

      //console.log(params);
      //console.log('source query (without "tags" and "author" params) = ' + source_param_string);

       
      
      
      
      function doFilter() {
        
        var final_param_string = source_param_string;
        
        final_param_string = addParamToQuery(final_param_string, getTagsQueryPart());
        final_param_string = addParamToQuery(final_param_string, getAuthorQueryPart());

        final_url = location.origin + location.pathname + final_param_string;
        
        //console.log('final url with selected tags (if selected) and author (if selected) = ' + final_url);
        
        top.location.href = final_url;
      }
      
      
      
      $("#doFilter").click(function(){
        doFilter();
      });
      
      
      $("#select-authors").change(function(){
        if (!$("#select-authors").val()) {
          $("#goToAuthorPage ").hide();
        }
        else {
          $("#goToAuthorPage ").show();
        }
        doFilter();
      });
      
      
      $("#goToAuthorPage").click(function(){
        var author = $("#select-authors").val();
        //console.log('author = ' + author);
        if (author) {
          top.location.href = location.origin + '/u/' + encodeURIComponent(author);
        }
      });
      


      
      function addParamToQuery(currentQuery, newParam) {
        if (newParam) {
          return currentQuery + (currentQuery ? '&' : '?') + newParam;
        }
        else {
          return currentQuery;
        }
      }
      
      
      
      
      function getAuthorQueryPart() {
        
        authorQueryPart = '';
        var author = $("#select-authors").val();
        
        if (author) {
          authorQueryPart = 'author=' + encodeURIComponent(author);
        }
        //console.log('authorQueryPart = ' + authorQueryPart);
        return authorQueryPart;
      }



      
      function getTagsQueryPart() {
        
        tags = '';
        tagsDisabled = ''; 
        
        if (jQuery('#select-tags.chzn-select').val()) {
          tags = jQuery('#select-tags.chzn-select').val().toString();
        }

        jQuery('#select-tags.chzn-select [selected][disabled]').each(
          function(){tagsDisabled = tagsDisabled + (tagsDisabled ? ',' : '') + jQuery(this).val()
        }); 

        tags = (tags ? (tags + (tagsDisabled ? ',' : '')) : '') + tagsDisabled;

        //console.log('current selected tags (with disabled) = ' + tags);
        //console.log('among them -> tagsDisabled = ' + tagsDisabled);
        
        if (tags) {
          tagsQueryPart = 'tags=' + encodeURIComponent(tags);
          //console.log('tagsQueryPart = ' + tagsQueryPart);
          return tagsQueryPart;
        }
        
        //console.log('tagsQueryPart = -----');
        return false;
      }
      
      
       

    }
  };
  
}(jQuery));