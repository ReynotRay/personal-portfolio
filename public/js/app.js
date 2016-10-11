'use strict';

var Portfolio = function() {
    // this.input = $('.list-todo');
    // this.list = $('.todo-items');
};

Portfolio.prototype.mouseenter = function(event) {
$( ".thumbnail" ).mouseenter(function() {
  	$(this).children().fadeIn();
    $(this).css("filter", "saturate(3)");
  })
  .mouseleave(function() {
  	$(this).children().hide();
    $(this,'img').css("filter", "saturate(1)");
  });
}

var portfolio = new Portfolio();
portfolio.mouseenter();


