
/*Alterar o tema */

const icon = document.querySelector('.icon');
const body = document.body;

icon.addEventListener('click', function () {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    icon.src = 'assets/img/icon-dark.png';
  } else {
    icon.src = 'assets/img/icon-light.png';
  }
});