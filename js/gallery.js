const slides = document.querySelectorAll('.slide');
let active = document.querySelector('.slide.active');

slides.forEach((slide) => {
  slide.onclick = () => {
    active.classList.remove('active');
    active = slide;
    slide.classList.add('active');
  }
})
