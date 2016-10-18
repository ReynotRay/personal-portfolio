'use strict';

var Portfolio = function() {
    // this.input = $('.list-todo');
    // this.list = $('.todo-items');
    // $(this).css("filter", "saturate(2)");
    this.story = $("#my-story");
};

Portfolio.prototype.mouseenter = function() {
    this.story.mouseenter(function() {
            $("#my-projects").css({ "-webkit-transition": ".9s", "filter": "saturate(0)", "-webkit-clip-path": "polygon(1125px 0, 998px 0, 987px 1020px, 767px 645px)" });
            $(this).css({ "-webkit-transition": ".9s", "-webkit-clip-path": "polygon(0 0, 0 0, 0 1999px, 1143px 0)" });
            $('#projects').fadeOut();
            //$('#story').css({ "font-size": "40px" });

        })
        .mouseleave(function() {
            console.log('left story');
            $('#my-projects').css({ "-webkit-clip-path": "polygon(746px 0, 991px 0, 990px 613px, 240px 613px)", "filter": "saturate(1)" });
            $('#projects').fadeIn();
        });
    $("#my-projects").mouseenter(function() {
            $("#my-story").css({ "-webkit-transition": ".9s", "filter": "saturate(0)", "-webkit-clip-path": "polygon(0 0, 0 0, 0 309px, 304px 0)" });
            $('#my-projects').css({ "-webkit-transition": ".9s", "-webkit-clip-path": "polygon(220px 0, 999px 0, 993px 613px, -248px 612px)" });
            $('#story').fadeOut();
            //$('#projects').css({ "font-size": "40px" });
        })
        .mouseleave(function() {
            $("#my-story").css({ "-webkit-clip-path": "polygon(0 0, 0 0, 0 934px, 750px 0)", "filter": "saturate(1)" });
            $('#my-projects').css("-webkit-clip-path", "polygon(746px 0, 991px 0, 990px 613px, 240px 613px)");
            $('#story').fadeIn();
        });
}

Portfolio.prototype.showStory = function(event) {
    $("#my-story").click(function() {
        console.log("clicked within showStory")
            //$("#my-projects").fadeOut();
        $(".start-section").fadeOut();
        $(".header-container").fadeIn(2000);
        $(".aboutme-container").fadeIn(2000);
        //$("#my-story").fadeOut({"-webkit-transition": ".9s", "filter": "saturate(0)","-webkit-clip-path":"polygon(0 0, 0 0, 0 309px, 304px 0)"});
    })

    $("#my-projects").click(function() {
        $(".start-section").fadeOut();
        $(".header-container").fadeIn(2000);
        $("#my-story").fadeOut();
        $(".projects-container").fadeIn(2000);
    })
}
Portfolio.prototype.slideShow = function(x) {
    var photo_index = 0;
    var photos = ["austin.jpg" ,"nature2.jpg" , "nature3.jpg"];

    function switchPhoto() {
        photo_index = (photo_index + 1) % photos.length;
        // if (photo_index){
        //     $('#page-header').fadeIn();
        // }
        document.getElementById("page-header").style.backgroundImage = ('url("public/images/' + photos[photo_index] + '');
        console.log("after");
    }
    switchPhoto();
    setInterval(switchPhoto, 7000);

}





var portfolio = new Portfolio();
portfolio.mouseenter();
portfolio.showStory();
portfolio.slideShow();
