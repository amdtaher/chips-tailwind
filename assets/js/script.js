let navMenu = document.querySelector('#navMenu');
let menuBtn = document.querySelector('#menu');
let closeBtn = document.querySelector('#close');

// Open and Closing Menu
menuBtn.addEventListener('click', ()=>{
    navMenu.classList.add('showMenu');
    navMenu.classList.remove('hideMenu');
})
closeBtn.addEventListener('click', ()=>{
    navMenu.classList.remove('showMenu');
    navMenu.classList.add('hideMenu');
})
// Links Click will hide the Menu
let navlinks = document.querySelectorAll('#navMenu > li > a');
navlinks.forEach((navlink)=>{
    navlink.addEventListener('click', linkClick);
})
function linkClick(){
    let navMenu = document.querySelector('#navMenu');
    navMenu.classList.remove('showMenu');
    navMenu.classList.add('hideMenu');
}

// Scroll Header Shadow
window.addEventListener('scroll', scrollHeader);
function scrollHeader(){
    let header = document.querySelector('.header');
    if(this.scrollY >= 50){
        header.classList.add('scrollHeader');
    }else{
        header.classList.remove('scrollHeader');
    }
}

// Swipper JS
const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 2,
    centeredSlides: true,
    initialSlide: 3,
    breakpoints: {
        768: {
            slidesPerView: 3,
        }
    },
});