'use strict';

var Portfolio = function() {
    // this.input = $('.list-todo');
    // this.list = $('.todo-items');
    // $(this).css("filter", "saturate(2)");
    this.story = $("#my-story");
};

Portfolio.prototype.mouseenter = function(event) {
    this.story.mouseenter(function() {
            $("#my-projects").css({"-webkit-transition": ".9s", "-webkit-clip-path": "polygon(1125px 0, 998px 0, 987px 1020px, 767px 645px)"});
            $(this).css({"-webkit-transition": ".9s", "-webkit-clip-path": "polygon(0 0, 0 0, 0 1999px, 1143px 0)"});
        })  
        .mouseleave(function() {
            console.log('left story');
            $('#my-projects').css("-webkit-clip-path", "polygon(746px 0, 991px 0, 990px 613px, 240px 613px)");
        });
    $("#my-projects").mouseenter(function() {
            $("#my-story").css("-webkit-clip-path", "polygon(0 0, 0 0, 0 309px, 304px 0)");
            $('#my-projects').css("-webkit-clip-path", "polygon(220px 0, 999px 0, 993px 613px, -248px 612px)");
        })
        .mouseleave(function() {
            $("#my-story").css("-webkit-clip-path", "polygon(0 0, 0 0, 0 934px, 750px 0)");
            $('#my-projects').css("-webkit-clip-path", "polygon(746px 0, 991px 0, 990px 613px, 240px 613px)");
            console.log('left-projects');
        });
}

var portfolio = new Portfolio();
portfolio.mouseenter();


    //-webkit-clip-path: polygon(220px 0, 991px 0px, 989px 631px, -248px 693px);