const toTop = document.querySelector('.to-top');
const nav = document.querySelector('.nav .bg');
const body = document.querySelector('#home');
const slides = document.querySelectorAll('.slide');
const contents = document.querySelectorAll('.content');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const panels = document.querySelectorAll('.panel');

let activeSlide = 0;

toTop.addEventListener('click', () => {
  window.scroll({
    top: 0,
  });
});

window.addEventListener('scroll', () => {
  toTop.classList.toggle('show', window.scrollY > 500);

  nav.classList.toggle('show', window.scrollY > 150);
});

// rightBtn.addEventListener('click', () => {
//   activeSlide++;

//   if (activeSlide > slides.length - 1) {
//     activeSlide = 0;
//   }

//   setBgToBody();
//   setActiveSlide();
// });

// leftBtn.addEventListener('click', () => {
//   activeSlide--;

//   if (activeSlide < 0) {
//     activeSlide = slides.length - 1;
//   }

//   setBgToBody();
//   setActiveSlide();
// });

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'));
  contents.forEach((content) => content.classList.remove('active'));
  panels.forEach((panel) => panel.classList.remove('active'));

  slides[activeSlide].classList.add('active');
  contents[activeSlide].classList.add('active');
  panels[activeSlide].classList.add('active');
}

$(document).ready(function () {
  setBgToBody();

  $('.to-karir').click(function () {
    $(window).scrollTop(1247);
  });

  $('#right').click(function () {
    activeSlide++;
    if (activeSlide > slides.length - 1) {
      activeSlide = 0;
    }

    setBgToBody();
    setActiveSlide();
  });

  $('#left').click(function () {
    activeSlide--;

    if (activeSlide < 0) {
      activeSlide = slides.length - 1;
    }

    setBgToBody();
    setActiveSlide();
  });
});

$(document).scroll(function () {
  console.log($(window).scrollTop());
});
