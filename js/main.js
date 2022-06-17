
const body = document.body;
const triggerMenu = document.querySelector(".page-header .trigger-menu");
const nav = document.querySelector(".page-header nav");
const menu = document.querySelector(".page-header .menu");
const lottieWrapper = document.querySelector(".lottie-wrapper");
const lottiePlayer = document.querySelector("lottie-player");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

triggerMenu.addEventListener("click", () => {
    body.classList.toggle("menu-open");
    if(document.body.classList.contains('menu-open')) {
        enable();
        console.log('Скролу пизда');
    } else {
        disable();
        console.log('Скрол попиздил работать');
    }
    console.log('open');
});

lottieWrapper.addEventListener("click", (e) => {
    e.preventDefault();
    triggerMenu.click();
    body.classList.toggle("menu-open-with-lottie");
});

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        body.classList.remove(scrollUp);
        return;
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
    } else if (
        currentScroll < lastScroll &&
        body.classList.contains(scrollDown)
    ) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
});


// src/utils/scroll-lock.js
const $body = document.querySelector('body');
let scrollPosition = 0;

function enable() {
    scrollPosition = window.pageYOffset;
    $body.style.overflow = 'hidden';
    $body.style.position = 'fixed';
    $body.style.top = `-${scrollPosition}px`;
    $body.style.width = '100%';
}
function disable() {
    $body.style.removeProperty('overflow');
    $body.style.removeProperty('position');
    $body.style.removeProperty('top');
    $body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
}