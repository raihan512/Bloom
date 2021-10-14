$(document).ready(function () {
    $('.sticky-plugin').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });


    $('.portfolio_slide').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplaySpeed: 500,
        autoplayHoverPause: true,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 3,
                nav: true,
            }
        }
    });

    $('html').smoothScroll(500);

    $('body').materialScrollTop();

});
