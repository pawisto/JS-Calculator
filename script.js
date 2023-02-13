const onButton = document.getElementById("on-button");
const offButton = document.getElementById("off-button");
const cleanButton = document.getElementById("clean-button");

// operation buttons
const moduloButton = document.getElementById("modulo-button");
const sqrtButton = document.getElementById("sqrt-button");
const expotentationButton = document.getElementById("expotentation-button");
const divisionButton = document.getElementById("division-button");
const multiplicationButton = document.getElementById("multiplication-button");
const minusButton = document.getElementById("minus-button");
const plusButton = document.getElementById("plus-button");
const equalButton = document.getElementById("equal-button");
const invertButton = document.getElementById("invert-button");

//number buttons
const button0 = document.getElementById("button-0");
const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const button4 = document.getElementById("button-4");
const button5 = document.getElementById("button-5");
const button6 = document.getElementById("button-6");
const button7 = document.getElementById("button-7");
const button8 = document.getElementById("button-8");
const button9 = document.getElementById("button-9");
const commaButton = document.getElementById("comma-button");

// display number entered by user or calculated
const displayNumber = document.getElementById("display-number");

// status of calculator whether it is on or off
let calcStatus = "off";

let firstNumber;
let result;

// variable operation describes which mathematical operation was choosen
let operation = "";

onButton.addEventListener("click", (event) => {
  event.preventDefault();
  calcStatus = "on";
  displayNumber.textContent = "0";
  firstNumber = "";
  operation = "";
});

offButton.addEventListener("click", (event) => {
  event.preventDefault();
  calcStatus = "off";
  displayNumber.textContent = "";
  firstNumber = "";
  operation = "";
});

cleanButton.addEventListener("click", (event) => {
  event.preventDefault();
  displayNumber.textContent = "0";
  firstNumber = "";
  operation = "";
});

commaButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (calcStatus === "on") {
    if (displayNumber.textContent.match(/\d/g).length < 16) {
      if (displayNumber.textContent.includes(".") === false) {
        displayNumber.textContent = displayNumber.textContent + ".";
      }
    }
  }
});

button0.addEventListener("click", (event) => {
  event.preventDefault();
  if (calcStatus === "on") {
    if (displayNumber.textContent !== "0") {
      if (displayNumber.textContent.match(/\d/g).length < 16) {
        displayNumber.textContent = displayNumber.textContent + "0";
      }
    }
  }
});

button1.addEventListener("click", (event) => {
  event.preventDefault();
  if (calcStatus === "on") {
    if (displayNumber.textContent.match(/\d/g).length < 16) {
      if (displayNumber.textContent !== "0") {
        displayNumber.textContent = displayNumber.textContent + "1";
      } else {
        displayNumber.textContent = "1";
      }
    }
  }
});

button2.addEventListener("click", (event) => {
  event.preventDefault();
  if (calcStatus === "on") {
    if (displayNumber.textContent.match(/\d/g).length < 16) {
      if (displayNumber.textContent !== "0") {
        displayNumber.textContent = displayNumber.textContent + "2";
      } else {
        displayNumber.textContent = "2";
      }
    }
  }
});

button3.addEventListener("click", (event) => {
  event.preventDefault();
  if (calcStatus === "on") {
    if (displayNumber.textContent.match(/\d/g).length < 16) {
      if (displayNumber.textContent !== "0") {
        displayNumber.textContent = displayNumber.textContent + "3";
      } else {
        displayNumber.textContent = "3";
      }
    }
  }
});

button4.addEventListener("click", (event) => {
  event.preventDefault();
  if (calcStatus === "on") {
    if (displayNumber.textContent.match(/\d/g).length < 16) {
      if (displayNumber.textContent !== "0") {
        displayNumber.textContent = displayNumber.textContent + "4";
      } else {
        displayNumber.textContent = "4";
      }
    }
  }
});

button5.addEventListener("click", (event) => {
  event.preventDefault();
  if (calcStatus === "on") {
    if (displayNumber.textContent.match(/\d/g).length < 16) {
      if (displayNumber.textContent !== "0") {
        displayNumber.textContent = displayNumber.textContent + "5";
      } else {
        displayNumber.textContent = "5";
      }
    }
  }
});

button6.addEventListener("click", (event) => {
  event.preventDefault();
  if (calcStatus === "on") {
    if (displayNumber.textContent.match(/\d/g).length < 16) {
      if (displayNumber.textContent !== "0") {
        displayNumber.textContent = displayNumber.textContent + "6";
      } else {
        displayNumber.textContent = "6";
      }
    }
  }
});

button7.addEventListener("click", (event) => {
  event.preventDefault();
  if (calcStatus === "on") {
    if (displayNumber.textContent.match(/\d/g).length < 16) {
      if (displayNumber.textContent !== "0") {
        displayNumber.textContent = displayNumber.textContent + "7";
      } else {
        displayNumber.textContent = "7";
      }
    }
  }
});

button8.addEventListener("click", (event) => {
  event.preventDefault();
  if (calcStatus === "on") {
    if (displayNumber.textContent.match(/\d/g).length < 16) {
      if (displayNumber.textContent !== "0") {
        displayNumber.textContent = displayNumber.textContent + "8";
      } else {
        displayNumber.textContent = "8";
      }
    }
  }
});

button9.addEventListener("click", (event) => {
  event.preventDefault();
  if (calcStatus === "on") {
    if (displayNumber.textContent.match(/\d/g).length < 16) {
      if (displayNumber.textContent !== "0") {
        displayNumber.textContent = displayNumber.textContent + "9";
      } else {
        displayNumber.textContent = "9";
      }
    }
  }
});

moduloButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (calcStatus === "on") {
    if (displayNumber.textContent.match(/[A-Za-z]/g) === null) {
      firstNumber = displayNumber.textContent;
      displayNumber.textContent = "0";
      operation = "modulo";
    }
  }
});

sqrtButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (calcStatus === "on") {
    if (displayNumber.textContent.match(/[A-Za-z]/g) === null) {
      if (displayNumber.textContent.includes("-")) {
        displayNumber.textContent =
          "This calculator is not designed for calculating imaginary numbers.";
        firstNumber = "";
      } else {
        result = String(Math.sqrt(parseFloat(displayNumber.textContent)));
        displayNumber.textContent = result;
        firstNumber = result;
      }
    }
  }
});

expotentationButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (calcStatus === "on") {
    if (displayNumber.textContent.match(/[A-Za-z]/g) === null) {
      firstNumber = displayNumber.textContent;
      displayNumber.textContent = "0";
      operation = "expotentation";
    }
  }
});

divisionButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (calcStatus === "on") {
    if (displayNumber.textContent.match(/[A-Za-z]/g) === null) {
      firstNumber = displayNumber.textContent;
      displayNumber.textContent = "0";
      operation = "division";
    }
  }
});

multiplicationButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (calcStatus === "on") {
    if (displayNumber.textContent.match(/[A-Za-z]/g) === null) {
      firstNumber = displayNumber.textContent;
      displayNumber.textContent = "0";
      operation = "multiplication";
    }
  }
});

minusButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (calcStatus === "on") {
    if (displayNumber.textContent.match(/[A-Za-z]/g) === null) {
      firstNumber = displayNumber.textContent;
      displayNumber.textContent = "0";
      operation = "subtraction";
    }
  }
});

plusButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (calcStatus === "on") {
    if (displayNumber.textContent.match(/[A-Za-z]/g) === null) {
      firstNumber = displayNumber.textContent;
      displayNumber.textContent = "0";
      operation = "addition";
    }
  }
});

invertButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (calcStatus === "on") {
    if (displayNumber.textContent.match(/[A-Za-z]/g) === null) {
      if (displayNumber.textContent.substring(0, 1) !== "-") {
        displayNumber.textContent = "-" + displayNumber.textContent;
      } else if (displayNumber.textContent.substring(0, 1) === "-") {
        displayNumber.textContent = displayNumber.textContent.replace("-", "");
      }
    }
  }
});

equalButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (calcStatus === "on") {
    if (operation === "modulo") {
      result = String(
        parseFloat(firstNumber) % parseFloat(displayNumber.textContent)
      );
      displayNumber.textContent = result;
      firstNumber = "";
      operation = "";
    }
    if (operation === "expotentation") {
      result = String(
        parseFloat(firstNumber) ** parseFloat(displayNumber.textContent)
      );
      displayNumber.textContent = result;
      firstNumber = "";
      operation = "";
    }
    if (operation === "division") {
      if (displayNumber.textContent === "0") {
        displayNumber.textContent = "Dividing by zero is impossible";
        firstNumber = "";
        operation = "";
      } else {
        result = String(
          parseFloat(firstNumber) / parseFloat(displayNumber.textContent)
        );
        displayNumber.textContent = result;
        firstNumber = "";
        operation = "";
      }
    }
    if (operation === "multiplication") {
      result = String(
        parseFloat(firstNumber) * parseFloat(displayNumber.textContent)
      );
      displayNumber.textContent = result;
      firstNumber = "";
      operation = "";
    }
    if (operation === "subtraction") {
      result = String(
        parseFloat(firstNumber) - parseFloat(displayNumber.textContent)
      );
      displayNumber.textContent = result;
      firstNumber = "";
      operation = "";
    }
    if (operation === "addition") {
      result = String(
        parseFloat(firstNumber) + parseFloat(displayNumber.textContent)
      );
      displayNumber.textContent = result;
      firstNumber = "";
      operation = "";
    }
  }
});
