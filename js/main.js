$(document).ready(function () {
    
        // Smooth scroll
$("[data-scroll]").on('click', function(event){
  event.preventDefault();

  let elemID = $(this).data('scroll');
  let elemOffSet = $(elemID).offset().top;

  $('html, body').animate({
      scrollTop: elemOffSet - 68
  });

});
    
  // Sticky navbar
    let header = $('.header');
    let scrollPos = $(window).scrollTop();


    $(window).on('scroll load resize', function(){
        scrollPos = $(this).scrollTop();

        if(scrollPos > 1){
          header.addClass('active');
        }else{
          header.removeClass('active');
        }
    });

// To top
let topBtn = $('#toTop');
$(window).on('scroll', function () {
  if ($(window).scrollTop() > 30) {
    topBtn.addClass('show');
  } else {
    topBtn.removeClass('show');

  }
});

// AOS 
AOS.init({
  duration: 1000,
  easing: 'ease'
});
    // ======== Year ========
    
    let abcYear = document.getElementById('year');
    abcYear.innerHTML = new Date().getFullYear();

// ======== Mini submenu ========
let miniSubmenu = document.querySelector(".mini-submenu");
let miniSubmenuItem = document.querySelector(".mini-submenu__item");

miniSubmenuItem.addEventListener('click', function (e) {
  e.preventDefault();
  miniSubmenu.classList.toggle('active');
})
// *************** Burger menu ***************
const menuBtn = document.querySelector('.burger');
const miniNav = document.querySelector('.mini-nav');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('burger__open');
  miniNav.classList.toggle('active');
})
    $('.mini-nav__item').on('click', function (event) {
  event.preventDefault();
  $('.mini-nav').removeClass('active');
  $('.burger').removeClass('burger__open');
})
$('.mini-submenu__title').on('click', function (event) {
  event.preventDefault();
  $('.mini-nav').removeClass('active');
  $('.burger').removeClass('burger__open');
})
    
});
