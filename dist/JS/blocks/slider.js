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

$(function () {

    //Вешаем обработчики
    var addListeners = function (slider) {
        var $links = $('.promo__link');

        $links.on('click', function (evt) {
            evt.preventDefault()

            var slide = $(this).attr('data-slide');

            slider.slick('slickGoTo', slide);
        })
    };

    //Инициализируем слайдер
    var init = function () {
        var $slickContainer = $('.promo__top-slider');

        //Обработчик события init 
        $slickContainer.on('init', function (event, slick, currentSlide, nextSlide) {
            var $slider = $(this);

            addListeners($slider);
        });

        //Инициализация слайдера
        $('.promo__top-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            touchThreshold: 10,
            Infinity: false,
            /* autoplay: true,
            autoplaySpeed: 2000, */
        });
    };

    init();
});