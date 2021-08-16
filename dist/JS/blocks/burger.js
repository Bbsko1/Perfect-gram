const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const page = document.querySelector(".page");

burger.addEventListener("click", function (evt) {
    evt.preventDefault();

    menu.classList.toggle("header__menu--active");
    page.classList.toggle('page--hidden');
})