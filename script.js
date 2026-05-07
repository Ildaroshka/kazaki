document.querySelectorAll('.slider').forEach(slider => {
  const slides = slider.querySelectorAll('.slide');
  const next = slider.querySelector('.next');
  const prev = slider.querySelector('.prev');
  const dotsContainer = slider.querySelector('.dots');

  let index = 0;

  let dots = [];

  // создаём точки ТОЛЬКО если есть контейнер
  if (dotsContainer) {
    slides.forEach((_, i) => {
      const dot = document.createElement('span');
      if (i === 0) dot.classList.add('active');

      dot.addEventListener('click', () => {
        index = i;
        update();
      });

      dotsContainer.appendChild(dot);
    });

    dots = dotsContainer.querySelectorAll('span');
  }

  function update() {
    slides.forEach(s => s.classList.remove('active'));
    slides[index].classList.add('active');

    if (dots.length) {
      dots.forEach(d => d.classList.remove('active'));
      dots[index].classList.add('active');
    }
  }

  next?.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    update();
  });

  prev?.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    update();
  });

  // авто-слайд только если больше 1 картинки
  if (slides.length > 1) {
    setInterval(() => {
      index = (index + 1) % slides.length;
      update();
    }, 10000);
  }

});