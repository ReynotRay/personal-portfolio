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
  portfolio.showSnapChat();
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

var portfolio = new Portfolio();
portfolio.mouseenter();

