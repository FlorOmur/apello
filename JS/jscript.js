const myBurger = document.querySelector('.burger')
const myMinu = document.querySelector('.menu')
const menuLinks = document.querySelectorAll('.menu-link')

const header = document.querySelector('.header')
const myScroll = document.querySelector('.header_scroll')

myBurger.addEventListener('click', () => {
    myMinu.classList.toggle('show')
})

menuLinks.forEach(onelink => {
    onelink.addEventListener('click', () => {
        myMinu.classList.remove('show')
    })
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        header.classList.add('header_scroll')
    } else {
        header.classList.remove('header_scroll')
    }
})

AOS.init();

$(document).ready(function () {
    $('.collapse-item').each(function () {
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
        dots: true,
    });
})


console.log('header')