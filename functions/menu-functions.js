const mob_button = document.querySelector('.button-icon');
const menu  = document.querySelector('.popup-menu');
mob_button.addEventListener('click',()=>{
  menu.classList.toggle('active');
  mob_button.classList.toggle('active');
});


// const btn5 = document.querySelector('.button-icon');

// function activate(){
//   btn5.classList.toggle('active');
// }
// btn5.addEventListener('click',activate)


// var mq = window.matchMedia( "(min-width: 768px)" );
// const slider = document.querySelector('.variations-slider');
//
// if (matchMedia) {
//   console.log('no')
// }
//
// // media query change
// function WidthChange() {
//   var mq = window.matchMedia( "(max-width: 768px)" );
//   if (mq.matches) {
//     slider.classList.remove('variations-slider');
//   } else {
//     // window width is less than 500px
//   }
//
// }
//
//
// //
// window.addEventListener('resize',WidthChange);
