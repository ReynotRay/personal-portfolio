'use strict';

var Portfolio = function() {
    // this.input = $('.list-todo');
    // this.list = $('.todo-items');
    // $(this).css("filter", "saturate(2)");
    this.story = $("#my-story");
};

Portfolio.prototype.mouseenter = function() {
    this.story.mouseenter(function() {
            $("#my-projects").css({ "-webkit-transition": ".9s", "filter": "grayscale(100%)", "-webkit-clip-path": "polygon(1125px 0, 998px 0, 987px 1020px, 767px 645px)" });

            $(this).css({ "-webkit-transition": ".9s", "-webkit-clip-path": "polygon(0 0, 0 0, 0 1999px, 1143px 0)" });
            $('#projects').css("opacity",".0");
            //$('#story').css({ "font-size": "40px" });

        })
        .mouseleave(function() {
            console.log('left story');
            $('#my-projects').css({ "-webkit-clip-path": "polygon(746px 0, 991px 0, 990px 613px, 240px 613px)", "filter": "grayscale(0%)" });
            $('#projects').css("opacity","1.0");
        });
    $("#my-projects").mouseenter(function() {
            $("#my-story").css({ "-webkit-transition": ".9s", "filter": "grayscale(100%)", "-webkit-clip-path": "polygon(0 0, 0 0, 0 309px, 304px 0)" });
            $('#my-projects').css({ "-webkit-transition": ".9s", "-webkit-clip-path": "polygon(220px 0, 999px 0, 993px 613px, -248px 612px)" });
            $('#story').css("opacity",".0");
            //$('#projects').css({ "font-size": "40px" });
        })
        .mouseleave(function() {
            $("#my-story").css({ "-webkit-clip-path": "polygon(0 0, 0 0, 0 934px, 750px 0)", "filter": "grayscale(0%)" });
            $('#my-projects').css("-webkit-clip-path", "polygon(746px 0, 991px 0, 990px 613px, 240px 613px)");
            $('#story').css("opacity","1.0");
        });
}
  
    $(window).scroll(function(){
        if ($(window).scrollTop() > 450){
            $(".links").css("background-color","rgba(0, 0, 0, 0.71)");
        } else{ $(".links").css("background-color","transparent");

        }

    });

Portfolio.prototype.showStory = function(event) {
    $("#my-story").click(function() {
        console.log("clicked within showStory")
            //$("#my-projects").fadeOut();
        $(".start-section").fadeOut();
        $(".header-container").fadeIn(2000);
        $(".aboutme-container").fadeIn(2000);
         $(".my-career").fadeIn(2000);
          $(".skills").fadeIn(2000);
          $("body").css("background","white");



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
    var photos = ["flag.jpg" ,"utah.jpg" , "forest.jpg"];

    function switchPhoto() {
        photo_index = (photo_index + 1) % photos.length;
         document.getElementById("page-header").style.backgroundImage = ('url("public/images/' + photos[photo_index] + '');
    }
    switchPhoto();
    setInterval(switchPhoto, 7000);

}

Portfolio.prototype.displayDivs = function() {
       $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.vertical-block').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
    
    });

 }   

var portfolio = new Portfolio();
portfolio.mouseenter();
portfolio.showStory();
portfolio.slideShow();
portfolio.displayDivs();




