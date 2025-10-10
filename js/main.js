const currentPage = window.location.pathname.split("/").pop();
const menuLinks = document.querySelectorAll('.nav-item a');

menuLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split("/").pop();
    if (linkPage === currentPage) {
        link.classList.add('active')
    }
});



const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        nav.classList.remove('active');
    });
});