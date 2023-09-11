const mobileMenu = document.querySelector('.mobile-menu');
const ul = document.querySelector('.ul-nav');
mobileMenu.addEventListener('click', function(){
    mobileMenu.classList.toggle('active');
    ul.classList.toggle('active');
    console.log(ul)
    
})