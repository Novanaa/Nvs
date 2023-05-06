// navbar-section
// darkMode-switch-btn
let darkMode = document.getElementById("darkMode");
let showMode = true;

function darkModeSwitch() {
  darkMode.src = "assest/darkMode/sun.svg";
}

function darkModeSwitch() {
  if (showMode) {
    darkMode.src = "assest/darkMode/sun.svg";
    showMode = false;
  } else {
    darkMode.src = "assest/feather/moon.svg";
    showMode = true;
  }
}
// btnSwitch-ends

// darkMode active/inactive
// show/hide darkMode
