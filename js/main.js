const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navBarLinks = document.getElementsByClassName('navbar-links');
toggleButton.addEventListener('click', () => {
  for (let i = 0; i < navBarLinks.length; i++) {
    navBarLinks[i].classList.toggle('active');
  }
});

function t() {
  document.getElementById('download').scrollIntoView();
}
let viewport = document.getElementById('x');
let content = document.getElementById('featuresContainer');
new ScrollBooster({
  viewport,
  content,
  bounce: false,
  lockScrollOnDragDirection: "horizontal",
  direction: 'horizontal',
  scrollMode: "transform"
})
// new ScrollBooster({

//   scrollMode: 'transform', // use CSS 'transform' property
//   direction: 'horizontal', // allow only horizontal scrolling
//   // emulateScroll: true, // scroll on wheel events
//   bounce: false,
//   // lockScrollOnDragDirection: "vertical",
//   // preventDefaultOnEmulateScroll: 'vertical',
//   // lockScrollOnDragDirection:'vertical'
//   // pointerMode: 'all'
// });