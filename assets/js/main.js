$(function () {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });

    // set image path
    $('.image-popup').on('click', function (e) {
        const imageUrl = this.dataset.src;
        console.log($(".modal-dialog").find('img'));
        $(".modal-dialog").find('img').attr('src', imageUrl);
    })

    //===== Isotope Project 4

    $('.container').imagesLoaded(function () {
        var $grid = $('.grid').isotope({
            // options
            transitionDuration: '1s'
        });

        // filter items on button click
        $('.portfolio-menu ul').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        //for menu active class
        $('.portfolio-menu ul li').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });

    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });



    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
});