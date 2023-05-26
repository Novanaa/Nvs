// switch Button Navbar
let navMenu = document.getElementById("navMenu");
let listNav = document.querySelector(".ul-nav");
let navList = document.querySelector(".li-nav");
let navContainer = document.getElementById("ulNav");
let navMenuIcons = document.querySelector(".nav-menu");
let isShow = true;

const navbarMenu = () => {
  listNav.classList.toggle("navActive");
  navList.classList.toggle("navActive");
  navMenuIcons.classList.toggle("opacity");
};

// windowOnscroll
window.addEventListener("scroll", () => {
  listNav.classList.remove("navActive");
  navList.classList.remove("navActive");
});

// window onClick
// window.onclick = () => {
//   // navList.classList.remove("navActive");
//   // listNav.classList.remove("navActive");
// };
