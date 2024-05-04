document.addEventListener("DOMContentLoaded", function () {
  event.preventDefault();
  const display = document.getElementById("screen");
  const theme_control = document.getElementById("themeControl");

  function disableButtons() {
    const fun_buttons = document.querySelectorAll(".fun_button");
    const ops_buttons = document.querySelectorAll(".operation_button");
    const num_buttons = document.querySelectorAll(".number_button");
    const buttons = [...fun_buttons, ...ops_buttons, ...num_buttons];
    buttons.forEach((button) => {
      button.disabled = true;
      // button.style.color = "blue";
    });
  }

  function enableButtons() {
    const fun_buttons = document.querySelectorAll(".fun_button");
    const ops_buttons = document.querySelectorAll(".operation_button");
    const num_buttons = document.querySelectorAll(".number_button");
    const buttons = [...fun_buttons, ...ops_buttons, ...num_buttons];
    buttons.forEach((button) => {
      button.disabled = false;
      //button.style.color = "red";
    });
  }

  let isPowerOn = false;
  document.getElementById("powerBtn").addEventListener("click", function () {
    let power_icon = document.getElementsByTagName("b")[0];
    if (!isPowerOn) {
      isPowerOn = true;
      power_icon.style.color = "green";
      //alert("ON");
      enableButtons();
    } else {
      isPowerOn = false;
      power_icon.style.color = "red";
      //alert("OFF");
      display.value = null;
      disableButtons();
    }
  });

  let isDarkMode = true;
  theme_control.addEventListener("click", function () {
    let theme_img = document.getElementById("theme_img");
    let header = document.getElementsByTagName("h4")[0];
    if (!isDarkMode) {
      // alert("Dark Mode");
      theme_img.src = "Images/night.png";
      background_control(`#31363f`);
      header.style.color = "white";
      operation_color_control(`#ff8a08`, `black`);
      function_color_control(`#eeeeee`, `7d7c7c`);
      number_color_control(`#222831`, `#fff`);
      isDarkMode = true;
    } else {
      // alert("Light Mode");
      theme_img.src = "Images/sun.png";
      background_control(`#FEFAF6`);
      operation_color_control(`#ff8a08`, `white`);
      function_color_control(`#EEEEEE`, `white`);
      number_color_control(`#EEEEEE`, `#222831`);
      header.style.color = "black";
      isDarkMode = false;
    }
  });

  //** This is a function that controls the bg /
  //**This function changes the background from dark to light mode and vice versa */
  function background_control(color) {
    document.getElementById("body").style.backgroundColor = ` ${color}`;
  }

  //* This function controls the color for the operator buttons  */
  //**The function receive to parameters [background-color, color] to modify the background-control and color of operation button */
  function operation_color_control(bg_clr, color) {
    const op_buttons = document.getElementsByClassName("operation_button");
    Array.from(op_buttons).forEach((button) => {
      button.style.backgroundColor = bg_clr;
      button.style.color = color;
    });
  }

  //**This function controls the function buttons */
  //**The function receive to parameters [background-color, color] to modify the background-control and color of function button */
  function function_color_control(bg_clr, color) {
    const fun_buttons = document.getElementsByClassName("fun_button");
    Array.from(fun_buttons).forEach((button) => {
      button.style.backgroundColor = bg_clr;
    });
  }

  //**This function controls the number buttons */
  //**The function receive to parameters [background-color, color] to modify the background-control and color of number button */
  function number_color_control(bg_clr, color) {
    const num_buttons = document.getElementsByClassName("number_button");
    Array.from(num_buttons).forEach((button) => {
      button.style.backgroundColor = bg_clr;
      button.style.color = color;
    });
  }
});
