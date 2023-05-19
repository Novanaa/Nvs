// Button Clear Messege
let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let numberInput = document.getElementById("numberInput");
let messegeArea = document.getElementById("messegeArea");

const contactBtn = () => {
  // clear value input
  setTimeout(() => {
    nameInput.value = "";
    emailInput.value = "";
    numberInput.value = "";
    messegeArea.value = "";
  }, 1800);

  // validasi
  const failed =
    "The message failed to send due to an error caused by invalid data input";
  const success = "Successfully sent the message";

  if (
    nameInput.value == "" &&
    emailInput.value == "" &&
    numberInput.value == "" &&
    messegeArea.value == ""
  ) {
    alert(failed);
  } else {
    alert(success);
  }
};

// email Send Messege
