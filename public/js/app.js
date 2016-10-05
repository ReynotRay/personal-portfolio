$( ".thumbnail" )
  .mouseenter(function() {
  	$(this).fadeIn
    $( this ).css("border", "5px solid rgba(14, 12, 173, 0.35)");
    // $( this ).text("");
  })
  .mouseleave(function() {
    $( this ).css( "border", "5px solid transparent" );
  });