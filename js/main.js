// Selection of HTML objects
const hamburgerMenu = document.querySelector(".hamburger-menu i");
const nav = document.querySelector(".nav");

// Defining a function
function openNav() {
  hamburgerMenu.classList.toggle("fa-times");
  hamburgerMenu.classList.toggle("fa-bars");
  nav.classList.toggle("nav-active");
}

// Calling the function after click event occurs
hamburgerMenu.addEventListener("click", function () {
  openNav();
});
