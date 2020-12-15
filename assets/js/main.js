const hamburger = document.querySelector(".hambuger");
const hamburgerContainer = document.querySelector(".hamburgerCover");

const navlinks = document.querySelector(".nav-links");

hamburgerContainer.addEventListener("click", e => {
  navlinks.classList.toggle("show");
  hamburgerContainer.classList.toggle("open");
});


window.addEventListener('scroll', e => {
  $nav = document.querySelector('nav');
  $nav.classList.toggle('sticky', window.scrollY > 0)
})
