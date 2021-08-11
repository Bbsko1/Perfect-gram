// programs slider

$('.programs__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    touchThreshold: 10,
    centerMode: true,
    centerPadding: "0px",
    accessibility: false,
    arrows: false,
    /* autoplay: true,
    autoplaySpeed: 2000, */
    responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerPadding: "50px",
                arrows: true,
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                centerPadding: "20px",
                arrows: true,
            }
        },
    ]
});

//promo sliders

$('.promo__top-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 10,
    infinite: false,
    asNavFor: '.promo__bottom-slider',
    responsive: [{
        breakpoint: 768,
        settings: {
            arrows: false,
        }
    }, ]
});

$('.promo__bottom-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    touchThreshold: 10,
    infinite: false,
    arrows: false,
    variableWidth: true,
    asNavFor: '.promo__top-slider',
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 4,
        }
    }, ]
});

// reviews sliders

$('.reviews__top-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    touchThreshold: 10,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    asNavFor: '.reviews__bottom-slider',
    responsive: [{
        breakpoint: 992,
        settings: {
            arrows: false
        },
        breakpoint: 576,
        settings: {
            accessibility: false,
            arrows: false,
            centerPadding: "20px",
            slidesToShow: 1,
        },
    }, ]
});

$('.reviews__bottom-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 10,
    infinite: true,
    asNavFor: '.reviews__top-slider',
    arrows: false,
});