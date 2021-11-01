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