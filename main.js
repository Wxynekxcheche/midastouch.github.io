/*===== MENU SHOW & HIDE =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU ON CLICK (FOR MOBILE) ====================*/
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLinks.forEach(n => n.addEventListener('click', linkAction));

/*==================== SMOOTH SCROLLING ====================*/
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const offset = 100;

        window.scrollTo({
            top: targetSection.offsetTop - offset,
            behavior: "smooth"
        });
    });
});

/*==================== ACTIVE LINK ON SCROLL ====================*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 60,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__link[href*=' + sectionId + ']');

        if (sectionsClass) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
        }
    });
};
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200
});

sr.reveal('.main, .our-services, .gallery-section, .contact-us', {});

/*===== MOBILE MENU TOGGLE =====*/
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});