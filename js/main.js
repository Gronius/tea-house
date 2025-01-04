const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector(".menu__close");
const menuList = document.querySelector(".menu__list");
const menuSadow = document.querySelector(".menu--close");

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('menu__list--open');
  menuSadow.classList.toggle('menu--open');
});

menuClose.addEventListener('click', () => {
  menuList.classList.remove('menu__list--open');
  menuSadow.classList.remove('menu--open');
});

// document.querySelector('.change-theme').addEventListener('clik', function(){
//   const currentTheme = document.body.className
//   if (currentTheme === 'light-theme') {
//     document.body.className = 'dark-theme'
//   } else {
//     document.body.className = 'dark-theme'
//   }
// });

