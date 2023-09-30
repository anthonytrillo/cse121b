/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
};

function addNumbers() {
  const number1 = Number(document.querySelector('#add1').value);
  const number2 = Number(document.querySelector('#add2').value);

  const sum = add(number1, number2);

  const sumInput = document.querySelector('#sum');
  sumInput.value = sum;
};

const addNumbersInput = document.querySelector('#addNumbers');

addNumbersInput.addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
  return number1 - number2;
};

const subtractNumbers = function() {
  const number1 = Number(document.querySelector('#subtract1').value);
  const number2 = Number(document.querySelector('#subtract2').value);

  const subtractInput = subtract(number1, number2);

  const differenceInput = document.querySelector('#difference');
  differenceInput.value = subtractInput;
};

const subtractNumbersInput = document.querySelector('#subtractNumbers');

subtractNumbersInput.addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
  return number1 * number2;
};

const multiplyNumbers = function() {
  const number1 = Number(document.querySelector('#factor1').value);
  const number2 = Number(document.querySelector('#factor2').value);

  const multiplyInput = multiply(number1, number2);

  const productInput = document.querySelector('#product');
  productInput.value = multiplyInput;
};

const productNumbersInput = document.querySelector('#multiplyNumbers');

productNumbersInput.addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => {
  return number1 / number2;
};

const divideNumbers = function() {
  const number1 = Number(document.querySelector('#dividend').value);
  const number2 = Number(document.querySelector('#divisor').value);

  const divideInputResult = divide(number1, number2);

  const divideInput = document.querySelector('#quotient');
  divideInput.value = divideInputResult;
};

const divideNumbersInput = document.querySelector('#divideNumbers');

divideNumbersInput.addEventListener('click', divideNumbers);

/* Decision Structure */
let currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();

document.getElementById("year").innerHTML = currentYear;
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').innerText = numbers;

/* Output Odds Only Array */
const odds = numbers.filter(number => number % 2 !== 0);
document.getElementById('odds').innerText = odds;

/* Output Evens Only Array */
const evens = numbers.filter(number => number % 2 === 0);
document.getElementById('evens').innerText = evens;

/* Output Sum of Org. Array */
const sum = numbers.reduce((acc, num) => acc + num, 0);
document.getElementById('sumOfArray').innerText = sum;

/* Output Multiplied by 2 Array */
const byTwo = numbers.map(number => number * 2);
document.getElementById('multiplied').innerText = byTwo;

/* Output Sum of Multiplied by 2 Array */
const multipleByTwo = numbers.map(number => number * 2);
const sumNumbersArray = multipleByTwo.reduce((acc, num) => acc + num, 0);
document.getElementById('sumOfMultiplied').innerText = sumNumbersArray;
