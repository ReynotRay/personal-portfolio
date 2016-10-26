'use strict';

var Portfolio = function() {
    // this.input = $('.list-todo');
    // this.list = $('.todo-items');
    // $(this).css("filter", "saturate(2)");
    this.story = $("#my-story");
};

Portfolio.prototype.mouseenter = function() {
    $("body").on("mouseenter", "#my-story, #story", function() {
        $("#my-projects").css({ "-webkit-transition": ".9s", "filter": "grayscale(100%)", "-webkit-clip-path": "polygon(1125px 0, 998px 0, 987px 1020px, 767px 645px)" });
        $(this).css({ "-webkit-transition": ".9s", "-webkit-clip-path": "polygon(0 0, 0 0, 0 1999px, 1143px 0)" });
        $('#projects').css("opacity", ".0");

    })
    $("body").on("mouseleave", "#my-story, #story", function() {
        $('#my-projects').css({ "-webkit-clip-path": "polygon(746px 0, 991px 0, 990px 613px, 240px 613px)", "filter": "grayscale(0%)" });
        $('#projects').css("opacity", "1.0");
    });
    $("body").on("mouseenter", "#my-projects, #projects", function() {
        $("#my-story").css({ "-webkit-transition": ".9s", "filter": "grayscale(100%)", "-webkit-clip-path": "polygon(0 0, 0 0, 0 309px, 304px 0)" });
        $('#my-projects').css({ "-webkit-transition": ".9s", "-webkit-clip-path": "polygon(220px 0, 999px 0, 993px 613px, -248px 612px)" });
        $('#story').css("opacity", ".0");

    })
    $("body").on("mouseleave", "#my-projects, #projects", function() {
        $("#my-story").css({ "-webkit-clip-path": "polygon(0 0, 0 0, 0 934px, 750px 0)", "filter": "grayscale(0%)" });
        $('#my-projects').css("-webkit-clip-path", "polygon(746px 0, 991px 0, 990px 613px, 240px 613px)");
        $('#story').css("opacity", "1.0");
    });
}
Portfolio.prototype.enterThumbnail = function(event) {
    $(".thumbnail").mouseenter(function() {
            $(this).children("a").fadeIn();
            $(this).css("filter", "saturate(2)");
        })
        .mouseleave(function() {
            $(this).children("a").hide();
            $(this, 'img').css("filter", "saturate(1)");
        });
    portfolio.mouseenter();
}


$(window).scroll(function() {
    if ($(window).scrollTop() > 450) {
        $(".links").css("background-color", "rgba(0, 0, 0, 0.71)");
    } else {
        $(".links").css("background-color", "transparent");

    }

});

Portfolio.prototype.showStory = function(event) {
    $("body").on("click", "#my-story, #story", function() {
        $(".intro-section").fadeOut();
        $(".header-container").fadeIn(2000);
        $(".aboutme-container").fadeIn(2000);
        $("#page-header").fadeIn(2000);
        $(".my-career").fadeIn(2000);
        $(".skills").fadeIn(2000);
        $("body").css("background", "white");
    })

    $("body").on("click", "#my-projects, #projects", function() {
        $("body").css("background", "white");
        $(".intro-section").fadeOut();
        $(".header-container").fadeIn(2000);
        $("#page-header").fadeIn(2000);
        $("#my-story").fadeOut();
        $(".projects-container").fadeIn(2000);
    })
}
Portfolio.prototype.slideShow = function(x) {

    var photo_index = 0;
    var photos = ["nature3.jpg", "utah.jpg", "forest.jpg"];

    function switchPhoto() {
        photo_index = (photo_index + 1) % photos.length;
        document.getElementById("page-header").style.backgroundImage = ('url("public/images/' + photos[photo_index] + '');
    }
    switchPhoto();
    setInterval(switchPhoto, 7000);
}

Portfolio.prototype.displayDivs = function() {
    $(window).scroll(function() {

        /* Check the location of each desired element */
        $('.vertical-block').each(function(i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 1500);

            }

        });

    });
    $(window).scroll(function() {
        $('.progress').each(function(i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 1500);

            }

        });

    });
    $(window).scroll(function() {
        $('.skills h2').each(function(i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 1500);

            }

        });

    });
    $(window).scroll(function() {
        $('.thumbnail').each(function(i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 1500);

            }

        });

    });
    $(window).scroll(function() {
        $('.projects p').each(function(i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 1500);

            }

        });

    });


}

var portfolio = new Portfolio();
portfolio.mouseenter();
portfolio.showStory();
portfolio.slideShow();
portfolio.displayDivs();
portfolio.enterThumbnail();
