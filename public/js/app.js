'use strict';

var Portfolio = function() {
    // this.input = $('.list-todo');
    // this.list = $('.todo-items');
};

Portfolio.prototype.mouseenter = function(event) {
	$( ".thumbnail" ).mouseenter(function() {
  	$(this).children().fadeIn();
    $(this).css("filter", "saturate(2)");
  })
  .mouseleave(function() {
  	$(this).children().hide();
    $(this,'img').css("filter", "saturate(1)");
  });
  portfolio.mouseenter();
}

Portfolio.prototype.showSnapChat = function(event) {
	$( "#first-snapchat" ).click(function() {
	$('#first-snapchat').css('display','none');
	$('#snapchat').fadeIn();
  	$( "li" ).mouseleave(function() {
  	$('#snapchat').hide();
  	$('#first-snapchat').fadeIn();
    });
})
}
// $(document).ready(function() {

// /* Every time the window is scrolled ... */
// $(window).scroll( function(){

//     /* Check the location of each desired element */
//     $('#sky','#meal').each( function(){

//         var bottom_of_object = $(this).position().top + $(this).outerHeight();
//         var bottom_of_window = $(window).scrollTop() + $(window).height();

//         /* If the object is completely visible in the window, fade it it */
//         if( bottom_of_window > bottom_of_object ){

//             $(this).animate({'opacity':'1'},800);

//         }    
//     }); 
//}); 
//});



var portfolio = new Portfolio();
portfolio.mouseenter();

