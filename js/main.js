$('.js-slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


let $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

// navigation

$(document).ready(function () {
    $(".nav-block__link").click(function () {
        $('.nav-block__link').removeClass('active-link');
        $(this).addClass('active-link');
    });
});




// SLIDER-navi

$(document).ready(function () {
    $(".navi-slider__sircle").click(function () {
        $('.navi-slider .active-link-scroll').removeClass('active-link-scroll');
        $(this).addClass('active-link-scroll');
    });
});

// nav

$(document).ready(function () {
    $(".nav-block__link").click(function () {
        $('.nav-block__link').removeClass('active-link-navi');
        $(this).addClass('active-link-navi');
    });
});



