
//create functions for the calculations

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (a !== 0 && b !== 0) {
    return a / b;
  } else {
    console.log("Cant divide by 0!!")
  }
}

console.log(add(3, 4));
console.log(subtract(3, 4));
console.log(multiply(3, 4));
console.log(divide(3, 4));

let firstNumber;
let operator;
let secondNumber;

function operate(firstNumber,operator ,secondNumber) {
  let sum = 0;
  try {
    switch(operator) {
      case "+":
        sum = add(firstNumber, secondNumber);
        break;
      case "-":
        sum = subtract(firstNumber, secondNumber);
        break;
      case "*":
        sum = multiply(firstNumber, secondNumber);
        break;
      case "/":
        sum = divide(firstNumber, secondNumber);
        break;
    }
  } catch(e) {
    console.log("there is an error:", e)
  }

  return sum;
}

console.log(operate(3, "", 3))