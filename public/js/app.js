'use strict';
var Portfolio = function() {
    // this.input = $('.list-todo');
    // this.list = $('.todo-items');

};

Portfolio.prototype.mouseenter = function(event) {
$( ".thumbnail" ).mouseenter(function() {
  	$(this).children().fadeIn();
    $(this).css("border", "5px solid rgba(14, 12, 173, 0.55)");
    //$(this).css("-webkit-filter", "grayscale(100%)");//; /* Chrome, Safari, Opera */
    //filter: grayscale(100%);
    $(this).css("filter", "saturate(9)");
    //$(this).css("background", "rgba(255, 255, 255, 0.275)");
    //$('.code').css("filter" , "blur(0px)");
	//    background-color: rgba(255, 255, 255, 0.375);
	//gonna have to be saturated

           // filter:blur(5px);




  })
  .mouseleave(function() {
  	$(this).children().hide();
    $(this).css( "border", "5px solid transparent" );
    $(this,'img').css("filter", "saturate(1)");
  });
}

var portfolio = new Portfolio();

portfolio.mouseenter();
