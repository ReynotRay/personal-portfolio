'use strict';

var Portfolio = function() {
    // this.input = $('.list-todo');
    // this.list = $('.todo-items');
};

Portfolio.prototype.mouseenter = function(event) {
    $("#my-story").mouseenter(function() {
            console.log('yeppie');
            $(this).fadeIn().css("filter", "saturate(2)");
            $('#my-projects').css("-webkit-clip-path", "polygon(1125px 0, 998px 0, 987px 1020px, 767px 645px)");
            $(this).css("-webkit-clip-path", "polygon(0 0, 0 0, 0 1999px, 1143px 0)");
        })
        .mouseleave(function() {
            console.log('left story');
            $('#my-projects').css("-webkit-clip-path", "polygon(746px 0, 991px 0, 990px 613px, 240px 613px)");
            $(this).css("filter", "saturate(1)");
        });
    $("#my-projects").mouseenter(function() {
            $('#my-story').css("-webkit-clip-path", "polygon(0 0, 0 0, 0 309px, 304px 0)");
            $('#my-projects').css("-webkit-clip-path", "polygon(220px 0, 999px 0, 993px 613px, -248px 612px)");
            console.log('pros');
            $(this).css("filter", "saturate(2)");
        })
        .mouseleave(function() {
          $('#my-story').css("-webkit-clip-path", "polygon(0 0, 0 0, 0 934px, 750px 0)");
          $('#my-projects').css("-webkit-clip-path", "polygon(746px 0, 991px 0, 990px 613px, 240px 613px)");
            console.log('left-projects');
            $(this).css("filter", "saturate(1)");
        });
}

var portfolio = new Portfolio();
portfolio.mouseenter();


    //-webkit-clip-path: polygon(220px 0, 991px 0px, 989px 631px, -248px 693px);