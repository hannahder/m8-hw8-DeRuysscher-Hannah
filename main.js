// It is always helpful to use comments in your code!

var navLinks = document.getElementsByClassName('nav-links');

function toggleDropdown() {
  this.children[1].classList.toggle('show');
}

for(i=0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('mouseenter', toggleDropdown);
  navLinks[i].addEventListener('mouseleave', toggleDropdown);
};
