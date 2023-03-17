const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu-open');
})