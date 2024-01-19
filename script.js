////////sticky navlist////////////////////////////////////////////////////

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 50)
})


////hamburger form/////////////////////////////////////////////////////

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuItems = menu.querySelectorAll('li'); document.querySelectorAll('.menu li');

let isMenuOpen = false;

burger.addEventListener('click', () => {
  if (!isMenuOpen) {
    openMenu();
  }
  else {
    closeMenu();
  }
});

function openMenu() {
  menu.classList.add('open');
  document.body.classList.add('menu-open');
  isMenuOpen = true;
}


function closeMenu() {
  menu.classList.remove('open');
  document.body.classList.remove('menu-open');
  isMenuOpen = false;
}

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    closeMenu();
  });

});

///////////////////////////////////////////////////////////////////

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  menu.classList.toggle('show');
  menuItems.forEach((item, index) => {
    if (item.style.animation) {
      item.style.animation = `menuItemFadeIn 0.2s ease forwards ${index / 7 + 0.3}s`;
    }
  });
});

//////////////////////////////////////////////////////////////////

setTimeout(function() {
  var span = document.getElementById("mySpan");
  span.innerHTML = "tony";
}, 2000);

/////////scrollreveal////////////////////////////

const sr = ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 1500,
  delay: 400,
  reset: true,
})

sr.reveal('.home-content')
sr.reveal('.home-image')
sr.reveal('.about-content')
sr.reveal('.skills')
sr.reveal('.main-text1')
sr.reveal('.nothing')
sr.reveal('.services')
sr.reveal('.service1')
sr.reveal('.service2')
sr.reveal('.service3')
sr.reveal('.main-text')
sr.reveal('.col-lg-4')
sr.reveal('.maximize p')





