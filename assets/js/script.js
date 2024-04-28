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

// To the Top Button
let scrollBtn = document.querySelector('#scrollBtn');
function showScrollBtn(){
    if(window.scrollY >= 300){
        scrollBtn.classList.add('scrollBtnShow');
        scrollBtn.classList.remove('scrollBtnHide');
    }else{
        scrollBtn.classList.remove('scrollBtnShow');
        scrollBtn.classList.add('scrollBtnHide');
    }
}
window.addEventListener('scroll', showScrollBtn)
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
scrollBtn.addEventListener('click', topFunction)

// Active Nav Link
document.addEventListener('DOMContentLoaded',
function () {
    const navItems = document.querySelectorAll('#navMenu>li>a');
    navItems.forEach(item => {
        item.addEventListener('click',
            function () {
                navItems.forEach(navItem => navItem
                    .classList.remove('active'));
                this.classList.add('active');
            });
    });
});

// Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    // reset: true, //reseting animation for repeating without reloading 
})
ScrollReveal().reveal(`.banner-content, .banner-image, #favourites, #products, #footer`);
ScrollReveal().reveal(`.banner-image`, {delay: 1200, scale: 0.7});
ScrollReveal().reveal(`.banner-extra-chips`, {delay: 1800, scale: 0.7});
ScrollReveal().reveal(`.banner-extra-tomato`, {delay: 2100, scale: 0.7});
ScrollReveal().reveal(`.banner-extra-leaf`, {delay: 2500, scale: 0.7});
ScrollReveal().reveal(`.care-image, .contact-image`, {origin: 'left', distance: '100px', delay: 600});
ScrollReveal().reveal(`.care-content, .contact-content`, {origin: 'right', distance: '100px', delay: 700});
ScrollReveal().reveal(`#ad`, {delay: 500, origin: 'right', distance: '300px'});