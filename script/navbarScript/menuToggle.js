// navbar-section

// dropdown-navbar
// dropdown-section
// let others = document.getElementById("others");
// let subMenu = document.getElementById("subMenu");
// let subMenuList = document.getElementById("subMenuList");
// let isShow = true;
// hide
// subMenu.style.transform = "scale(0)";
// subMenu.style.maxHeight = "0px";

// othersToggle Hide/Show

// function othersToggle() {
//   if (isShow) {
//     subMenu.style.transform = "scale(1)";
//     subMenu.style.maxHeight = "400px";
//     isShow = true;
//   } else {
//     subMenu.style.transform = "scale(0)";
//     subMenu.style.maxHeight = "0px";
//     isShow = false;
//   }
// }
// function othersToggle() {
//   if (isShow) {
//     subMenu.style.transform = "scale(0)";
//     subMenu.style.maxHeight = "0px";
//     isShow = false;
//   } else {
//     subMenu.style.transform = "scale(1)";
//     subMenu.style.maxHeight = "400px";
//     isShow = true;
//   }
// }

// downLogo Hide/Show
// function downLogo() {
//   if (isShow) {
//     subMenu.style.transform = "scale(1)";
//     subMenu.style.maxHeight = "400px";
//     isShow = true;
//   } else {
//     subMenu.style.transform = "scale(0)";
//     subMenu.style.maxHeight = "0px";
//     isShow = false;
//   }
// }
// function downLogo() {
//   if (isShow) {
//     subMenu.style.transform = "scale(0)";
//     subMenu.style.maxHeight = "0px";
//     isShow = false;
//   } else {
//     subMenu.style.transform = "scale(1)";
//     subMenu.style.maxHeight = "400px";
//     isShow = true;
//   }
// }

// hide when clicked
// function socialOnClick() {
//   if (isShow) {
//     subMenuList.style.transform = "scale(0)";
//     subMenuList.style.maxHeight = "0px";
//     isShow = false;
//   } else {
//     subMenuList.style.transform = "scale(1)";
//     subMenuList.style.maxHeight = "400px";
//     isShow = true;
//   }
// }

// windowOnClick
// window.onclick = myFunction;

// function myFunction() {
//   if (myFunction.target == subMenu) {
//     subMenu.style.transform = "scale(1)";
//     subMenu.style.maxHeight = "400px";
//     isShow = true;
//   } else {
//     subMenu.style.transform = "scale(0)";
//     subMenu.style.maxHeight = "0px";
//     isShow = false;
//   }
// }

// active/inactive
let dropdownMenu = document.querySelector(".dropdown-menu");
let othersToggle = document.getElementById("others");
let downLogo = document.getElementById("downLogo");
let optionSosmed = document.querySelector(".option-sosmed");
let optionProjects = document.querySelector(".option-projects");

othersToggle.onclick = function () {
  othersToggle.classList.toggle("active");
  dropdownMenu.classList.toggle("active");
};

downLogo.onclick = function () {
  downLogo.classList.toggle("active");
  dropdownMenu.classList.toggle("active");
};

// window hide elements
window.onclick = function (e) {
  if (
    !othersToggle.contains(e.target) &&
    !dropdownMenu.contains(e.target) &&
    !downLogo.contains(e.target)
  ) {
    othersToggle.classList.remove("active");
    dropdownMenu.classList.remove("active");
    downLogo.classList.remove("active");
  }
};

// clicked link(remove)
optionProjects.onclick = function () {
  optionProjects.classList.remove("active");
  dropdownMenu.classList.remove("active");
};

optionSosmed.onclick = function () {
  optionSosmed.classList.remove("active");
  dropdownMenu.classList.remove("active");
};
