const hamburguer = document.querySelector('#hamburguer');
const ul = document.querySelector('.ul-nav');
hamburguer.addEventListener('click', function(){
    hamburguer.classList.toggle('active');
    ul.classList.toggle('ul-active');
    
})