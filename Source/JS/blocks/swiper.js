// swiper search section

const swiperSearch = new Swiper('.search__slider-container', {
    speed: 400,
    slidesPerView: "auto",
    spaceBetween: 20,
    freeMode: true,
    breakpoints: {
        // when window width is >= 992px
        992: {
            slidesPerView: 4,
        }
    }
});

//swiper category-list

const swiperCategoryList = new Swiper('.goods__category-slider-container', {
    speed: 400,
    slidesPerView: "auto",
    spaceBetween: 20,
    freeMode: true,
    breakpoints: {
        // when window width is >= 992px
        992: {
            slidesPerView: 6,
        }
    }
});

// swiper goods

const swiperGoods = new Swiper('.goods__slider-container', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        // when window width is >= 480px
        630: {
            slidesPerView: 2,
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 3,
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 4,
        }
    }
});