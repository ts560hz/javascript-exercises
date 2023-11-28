const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};
const sum = function (array) {
  if (array.length === 0) {
    return 0;
  }
  let totalSum = 0;
  for (let i = 0; i < array.length; i++) {
    totalSum += array[i];
  }
  return totalSum;
};

const multiply = function (array) {
  if (array.length === 0) return 0;
  let result = 1;

  for (let i = 0; i < array.length; i++) {
    result *= array[i];
  }
  return result;
};

const power = function (a, x) {
  let result = 1;
  for (let i = 0; i < x; i++) {
    result *= a;
  }
  return result;
};

const factorial = function (x) {
  let result = 1;
  for (let i = x; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
