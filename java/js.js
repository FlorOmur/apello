const myBurger = document.querySelector('.burger')
const myMinu = document.querySelector('.menu')
const menuLinks = document.querySelectorAll('.menu-link')

myBurger.addEventListener('click', () => {
    myMinu.classList.toggle('show')
})

menuLinks.forEach(onelink =>{
    onelink.addEventListener('click', () =>{
        myMinu.classList.remove('show')
    })
})

