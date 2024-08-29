let searchBtn = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchBtn.classList.toggle('active')
    cartBtn.classList.remove('active')
    loginBtn.classList.remove('active')
    menuBtn.classList.remove('active')
}

let cartBtn = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    cartBtn.classList.toggle('active')
    searchBtn.classList.remove('active')
    loginBtn.classList.remove('active')
    menuBtn.classList.remove('active')
}

let loginBtn = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginBtn.classList.toggle('active')
    searchBtn.classList.remove('active')
    cartBtn.classList.remove('active')
    menuBtn.classList.remove('active')
}

let menuBtn = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    menuBtn.classList.toggle('active')
    loginBtn.classList.remove('active')
    searchBtn.classList.remove('active')
    cartBtn.classList.remove('active')
}

window.onscroll = () =>{
    menuBtn.classList.remove('active')
    loginBtn.classList.remove('active')
    searchBtn.classList.remove('active')
    cartBtn.classList.remove('active')
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;


function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}