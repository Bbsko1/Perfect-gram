const programsLinks = document.querySelectorAll('.programs__link');
const programsList = document.querySelectorAll('.programs__inner');


programsLinks.forEach(function (link, i) {
    link.addEventListener('click', function(evt) {
        evt.preventDefault();

        programsLinks.forEach(function (item) {
            item.classList.remove('programs__link--active');
        })

        programsList.forEach(function (item) {
            item.classList.remove('programs__inner--active');
        })

        link.classList.add('programs__link--active');
        programsList[i].classList.add('programs__inner--active');
    })
});


document.querySelector('.programs__link').click();
