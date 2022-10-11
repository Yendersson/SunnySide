const btn_menu = document.getElementById('menu');
const navbar = document.querySelector('.navbar');

btn_menu.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
})