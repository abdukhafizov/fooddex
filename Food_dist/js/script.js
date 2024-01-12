const open_btns = document.querySelectorAll('button[data-modal]')
const close_btns = document.querySelectorAll('[data-close]')
const modal = document.querySelector('.modal')

open_btns.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.add('show', 'fade')
    }
})
close_btns.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.remove('show', 'fade')
    }
})


// slider

const slides = document.querySelectorAll('.offer__slide')
const next_btn = document.querySelector('.offer__slider-next')
const prev_btn = document.querySelector('.offer__slider-prev')

let slideIndex = 0

slideShow(slideIndex)

function slideShow(n) {

    if (n === slides.length) {
        slideIndex = 0
    }

    if (n < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach(slide => slide.classList.add('hide', 'fade'))
    slides[slideIndex].classList.remove('hide')
}

next_btn.onclick = () => {
    slideIndex++
    slideShow(slideIndex)
}

prev_btn.onclick = () => {
    slideIndex--
    slideShow(slideIndex)
}


let prem_txt = document.querySelector("#prem_txt")
let tabheader__item_active = document.querySelector(".tabheader__item_active")
let fit_txt = document.querySelector("#fit_txt")
let post_txt = document.querySelector("#post_txt")
let bal_txt = document.querySelector("#bal_txt")
let fit = document.querySelector("#fit")
let premier = document.querySelector("#premier")
let post_menu = document.querySelector("#post_menu")
let balance = document.querySelector("#balance")
let tabcontent__descr = document.querySelector(".tabcontent__descr")


fit_txt.onclick = () => {
    prem_txt.classList.remove("tabheader__item_active")
    fit_txt.classList.add("tabheader__item_active")
    post_txt.classList.remove("tabheader__item_active")
    bal_txt.classList.remove("tabheader__item_active")

    fit.style.display = "block"
    premier.style.display = "none"
    post_menu.style.display = "none"
    balance.style.display = "none"
}
prem_txt.onclick = () => {
    prem_txt.classList.add("tabheader__item_active")
    fit_txt.classList.remove("tabheader__item_active")
    post_txt.classList.remove("tabheader__item_active")
    bal_txt.classList.remove("tabheader__item_active")

    premier.style.display = "block"
    fit.style.display = "none"
    post_menu.style.display = "none"
    balance.style.display = "none"
    

}
post_txt.onclick = () => {
    prem_txt.classList.remove("tabheader__item_active")
    fit_txt.classList.remove("tabheader__item_active")
    post_txt.classList.add("tabheader__item_active")
    bal_txt.classList.remove("tabheader__item_active")

    premier.style.display = "none"
    fit.style.display = "none"
    post_menu.style.display = "block"
    balance.style.display = "none"
}
bal_txt.onclick = () => {
    prem_txt.classList.remove("tabheader__item_active")
    fit_txt.classList.remove("tabheader__item_active")
    post_txt.classList.remove("tabheader__item_active")
    bal_txt.classList.add("tabheader__item_active")

    
    premier.style.display = "none"
    fit.style.display = "none"
    post_menu.style.display = "none"
    balance.style.display = "block"
}