const targetElement = document.querySelector('.wrapper');

function resize() {
  targetElement.style.width = window.innerWidth - 20 + 'px';
  targetElement.style.height = window.innerHeight - 20 + 'px';
}

window.addEventListener('resize', resize);

resize();
