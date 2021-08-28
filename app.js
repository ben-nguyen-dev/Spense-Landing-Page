const hamburger = document.querySelector(".menu__toggle");
const navMenu = document.querySelector(".nav__menu")

hamburger.addEventListener("click", mobileMenu);
var hamburgerActive = false;

var height = navMenu.clientHeight;

window.addEventListener("resize", () => {
    height = navMenu.clientHeight;
    if (height > 100 && hamburgerActive){
        mobileMenu();
        hamburgerActive = false;
    }
    console.log(height)
})

function mobileMenu() {
    if (!hamburgerActive) {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        document.querySelector('.navbar__container').style.paddingBottom=`${height+32}px`;
        hamburgerActive = true;
    }
    else {
        closeMenu();
        hamburgerActive = false;
    }
}

const navLink = document.querySelectorAll(".nav__link");
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.querySelector('.navbar__container').style.paddingBottom="initial";
}


/* GSAP Animations */
gsap.registerPlugin(ScrollTrigger);


let tl1 = gsap.timeline({})
tl1.from('.hero__left h1', {opacity: 0, duration: 2, x: -100})
tl1.from('.benefits .benefit__point', {opacity: 0, duration: 1, x: -50, stagger: 0.5}, '-=0.5')

// Standalone Instant gsap animation
//gsap.from('.benefits .benefit__point', {opacity: 0, duration: 1, x: -50, stagger: 0.5}, '-=0.5')

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".escrow__left",
        start: "top center",
        end: "+=100",
        scrub: false
    }
});

tl2.from(".escrow__left h1", {y: 75, duration: 1.35})
    .from(".escrow__left p", {opacity: 0, duration: 1})
    .from(".escrow__left a", {opacity: 0, duration: 1})


let tl3 = gsap.timeline({
scrollTrigger: {
    trigger: ".editor__right",
    start: "top center",
    end: "+=100",
    scrub: false
}
});

tl3.from(".editor__right h1", {y: 75, duration: 1.35})
    .from(".editor__right p", {opacity: 0, duration: 1})
    .from(".editor__right a", {opacity: 0, duration: 1})