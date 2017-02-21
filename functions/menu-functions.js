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
