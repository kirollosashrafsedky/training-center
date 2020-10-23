const nav = document.getElementById('main-nav');
const mainApp = document.getElementById('app');
const menuTrigger = document.getElementById('menu-trigger');
const menu = document.getElementById('main-menu');
const fullOverlay = document.getElementById('full-overlay');
const searchScreen = document.getElementById('search-screen');
const searchScreenTrigger = document.getElementById('search-screen-trigger');

let navStatus = 'hidden';
let isHome = false;
if(mainApp.getAttribute('data-is-home')){
    isHome = true;
}
function navAnimation(){
    if(navStatus == 'hidden' && isHome){
        if (window.scrollY > 1){
            nav.classList.remove("nav-up");
          }else{
            nav.classList.add("nav-up");
          }
    }
  
}

function toggleMenu(){
  if(navStatus == 'hidden'){
    menu.classList.add('show-nav');
    nav.classList.remove("nav-up");
    nav.classList.add('hide');
    app.classList.add('hide');
    fullOverlay.classList.add('show');
    menuTrigger.classList.add('rotate');
    navStatus = 'shown';
  }else{
    menu.classList.remove('show-nav');
    nav.classList.remove('hide');
    app.classList.remove('hide');
    fullOverlay.classList.remove('show');
    menuTrigger.classList.remove('rotate');

    navStatus = 'hidden';
    navAnimation();

  }
}




navAnimation();

window.addEventListener('scroll',navAnimation);
menuTrigger.addEventListener('click',toggleMenu);
fullOverlay.addEventListener('click',toggleMenu);
searchScreenTrigger.addEventListener('click',function(){
  searchScreen.classList.add('show');
})
searchScreen.addEventListener('click',function(e){
  if(e.target.tagName != 'INPUT' && e.target.tagName != 'BUTTON'){
    searchScreen.classList.remove('show');
  }
  console.log(e.target.tagName)
})


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    loop: true,
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        }
      },
  });

  AOS.init({
      duration: 600,
      easing:"ease-in-out",
      once: false,
  });