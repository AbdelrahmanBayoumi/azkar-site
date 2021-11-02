const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navBarLinks = document.getElementsByClassName('navbar-links');
toggleButton.addEventListener('click', () => {
  for (let i = 0; i < navBarLinks.length; i++) {
    navBarLinks[i].classList.toggle('active');
  }
});

function scrollToID(id) {
  document.getElementById(id).scrollIntoView();
}

/* --- Features Scroll --- */
const slider = document.querySelector(".scroll");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", e => {
  isDown = true;
  slider.classList.add("slider-active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
const mouseleave = () => {
  isDown = false;
  slider.classList.remove("slider-active");
}
slider.addEventListener("mouseleave", mouseleave);

slider.addEventListener("mouseup", mouseleave);

slider.addEventListener("mousemove", e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});