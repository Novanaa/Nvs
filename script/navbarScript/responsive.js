// switch Button Navbar
let navMenu = document.getElementById("navMenu");
let listNav = document.querySelector(".ul-nav, .li-nav");
let navList = document.querySelector(".li-nav");
let srcValue = "assest/feather/menu.svg";
let srcX = "assest/feather/x.svg";
let isShow = true;

const navbarMenu = () => {
  navMenu.src = srcValue;
  if (isShow) {
    navMenu.src = srcValue;
    isShow = false;
  } else {
    navMenu.src = srcX;
    isShow = true;
  }
  listNav.classList.toggle("btnActive");
  navList.classList.toggle("btnActive");
};

// window onClick
window.onclick = () => {
  if (navMenu.src === srcX) {
    navMenu.src = srcValue;
  }
};
