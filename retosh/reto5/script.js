const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.img');

let load = 0;
let int = setInterval(blurring, 30);
let timereduce = 0.01;
let mills = 30;
let opacity = 1;

function blurring() {
  if (load == 100) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  load++;

  loadText.style.opacity = opacity;
  opacity = opacity - timereduce;
  mills = mills - 0.3;

  bg.style.filter = `blur(${mills}px)`;
}
