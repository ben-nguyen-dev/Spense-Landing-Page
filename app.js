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
