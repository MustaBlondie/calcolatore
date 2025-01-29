// CALCULATOR
//continuare

// Variables for each part of the operation
let numberOne;
let numberTwo;
let operator;

// catching the numbers from calculator
let buttonsNumber = document.querySelectorAll(".number");

// catching the input
let inputValues = document.querySelector("#input");

// catching the numbers to be displayed in the input
buttonsNumber.forEach((btn) => {
  btn.addEventListener("click", function () {
    inputValues.value += btn.innerText + " ";
  });
});

// this take an operator and two numbers, and call one of the basic math operator function
function operate(numberOne, operator, numberTwo) {
  if (operator === "+") {
    add(numberOne, numberTwo);
  } else if (operator === "-") {
    subtract(numberOne, numberTwo);
  } else if (operator == "*") {
    multiply(numberOne, numberTwo);
  } else if (operator == "/") {
    if (numberTwo == 0) {
      alert("no puedes dividir entre cero '0'");
    } else {
      divide(numberOne, numberTwo);
    }
  } else {
    console.log("hey, use a proper grammar for a calculator!");
  }
}

// Basic Math Operators functions (+, -, *, /)
function add(numberOne, numberTwo) {
  const addOperation = numberOne + numberTwo;
  return (inputValues.value = addOperation);
}
function subtract(numberOne, numberTwo) {
  const subtractOperation = numberOne - numberTwo;
  return (inputValues.value = subtractOperation);
}
function multiply(numberOne, numberTwo) {
  const multiplyOperation = numberOne * numberTwo;
  return (inputValues.value = multiplyOperation);
}
function divide(numberOne, numberTwo) {
  let divideOperation = (numberOne / numberTwo).toFixed(3);
  return (inputValues.value = divideOperation);
}

// calling equal button
const equalButton = document.querySelector("#equal");

equalButton.addEventListener("click", function () {
  const arrayValues = inputValues.value.split(" ");
  numberOne = Number(arrayValues[0]);
  numberTwo = Number(arrayValues[2]);
  operator = arrayValues[1];
  operate(numberOne, operator, numberTwo);
});

// calling Clear button
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", function () {
  inputValues.value = "";
});
