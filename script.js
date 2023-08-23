const wrapper = document.querySelector('.wrapper');

function resize() {
  const mainElement = document.documentElement;
  const mainElementWidth = mainElement.clientWidth;
  const mainElementHeight = mainElement.clientHeight;

  wrapper.style.width = mainElementWidth + 'px';
  wrapper.style.height = mainElementHeight + 'px';
}

window.addEventListener('resize', resize);

resize();
