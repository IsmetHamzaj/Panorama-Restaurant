let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');
let navLinks = document.querySelectorAll('.navbar a');

menuBtn.onclick = () => {
    navbar.classList.toggle('active');
}

navLinks.forEach(link => {
    link.onclick = () => {
        navbar.classList.remove('active');
    }
});
