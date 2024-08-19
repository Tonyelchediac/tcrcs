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

document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const menuItems = document.querySelectorAll('.menu li');
  let isMenuOpen = false;

  burger.addEventListener('click', () => {
      if (!isMenuOpen) {
          openMenu();
      } else {
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
});

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
sr.reveal('.img-about')
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

//////////image slides/////////////////////////////

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



