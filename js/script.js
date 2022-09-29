// slider

const container = document.querySelector(".container");
const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: '.hero__pagination',
        type: 'bullets',
        clickable: true,
      },
});

// tabs 

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn) {btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function(element) {element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});


// document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
//   tabsBtn.addEventListener('click', function (e) {
//     const path = e.currentTarget.dataset.path;

//     document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
//       btn.classList.remove('tabs-nav__btn--active')
//     });
//     e.currentTarget.classList.add('tabs-nav__btn--active');
//     document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
//       tabsBtn.classList.remove('tabs-item--active')
//     });
    
//     document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
//   });
// });


// accordion

$(".accordion").accordion({
  heightStyle: "content",
});

$( ".accordion" ).accordion({
  collapsible: true
});
// Getter
var collapsible = $( ".accordion" ).accordion( "option", "collapsible" );
// Setter
$( ".accordion" ).accordion( "option", "collapsible", true );


  
// burger

let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav__list');
let menuLinks = menu.querySelectorAll('.nav__link')
let hidden = document.querySelector('.header__container')

burger.addEventListener('click',
  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('nav__list--active');

    document.body.classList.toggle('stop-scroll');

    hidden.classList.toggle('header__container-offset');
  });

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('nav__list--active');

    document.body.classList.remove('stop-scroll');

    hidden.classList.add('header__container-offset');
  });
 });


// search

let btnOpen = document.querySelector(".search__btn-open");
let form = document.querySelector(".search__form");
let close = document.querySelector(".search__close");



btnOpen.addEventListener('click',
  function () {

    form.classList.toggle('search__form--active');
  });

close.addEventListener('click',
  function () {
    form.classList.remove('search__form--active');
  });  


// btnOpen.addEventListener('click', function () {
//   form.classList.add("search__form--active");
//   this.classList.add("active");
// })

// document.addEventListener("click", function (e) {
//   let target = e.target;
//   if (!target.closest(".nav__search")) {
//     form.classList.remove("search__form--active");
//     form.querySelector("search__input").value = "";
//     document.querySelector(".search__btn-open").classList.remove("active")
//   }
// })

// close.addEventListener('click', function (e) {
//   form.classList.remove('search__form--active');
// })


