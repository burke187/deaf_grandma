  $(document).ready(function() {

    $("form").on('submit', function(event) {
        event.preventDefault();
        
        var url = $(this).attr('action');
        var params = $('form').serialize()
        $.post(url,params,function(response){
          $('#grandmas-response').remove();
          $('form').find("input[type=text], textarea").val("");
          $('h1').after('<p id="grandmas-response">'+response+'</p>');
        })

    });


    // This is called after the document has loaded in its entirety
    // This guarantees that any elements we bind to will exist on the page
    // when we try to bind to them

    // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  });
