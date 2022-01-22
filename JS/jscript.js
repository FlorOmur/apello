const myBurger = document.querySelector('.burger')
const myMinu = document.querySelector('.menu')
const menuLinks = document.querySelectorAll('.menu-link')

myBurger.addEventListener('click', () => {
    myMinu.classList.toggle('show')
})

menuLinks.forEach(onelink => {
    onelink.addEventListener('click', () => {
        myMinu.classList.remove('show')
    })
})

AOS.init();

$(document).ready(function () {
    $('.expand-collapse h3').each(function () {
        var tis = $(this), state = false, answer = tis.next('div').slideUp();
        tis.click(function () {
            state = !state;
            answer.slideToggle(state);
            tis.toggleClass('active', state);
        });
    });
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
    });
});