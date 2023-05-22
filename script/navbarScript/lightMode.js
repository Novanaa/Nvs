// navbar-section
// darkMode-switch-btn
let darkMode = document.getElementById("darkMode");
let showMode = true;

const darkModeSwitch = () => {
  darkMode.src = "assest/darkMode/sun.svg";
  if (showMode) {
    darkMode.src = "assest/darkMode/sun.svg";
    showMode = false;
  } else {
    darkMode.src = "assest/feather/moon.svg";
    showMode = true;
  }
};
// btnSwitch-ends

// darkMode active/inactive
// show/hide darkMode
