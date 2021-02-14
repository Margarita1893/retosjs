const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
var contador = 0;

function abrir() {
  if (contador == 0) {
    container.classList.add('show-nav');
    contador = 1;
  } else {
    container.classList.remove('show-nav');
    contador = 0;
  }
  close.addEventListener('click', abrir, false);
}

open.addEventListener('click', abrir, true);
