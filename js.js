// CALCULATOR

// Variables for each part of the operation
let numberOne;
let numberTwo;
let operator;

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
  return console.log(addOperation);
}
function subtract(numberOne, numberTwo) {
  const subtractOperation = numberOne - numberTwo;
  return console.log(subtractOperation);
}
function multiply(numberOne, numberTwo) {
  const multiplyOperation = numberOne * numberTwo;
  return console.log(multiplyOperation);
}
function divide(numberOne, numberTwo) {
  let divideOperation = (numberOne / numberTwo).toFixed(3);
  return console.log(divideOperation);
}
