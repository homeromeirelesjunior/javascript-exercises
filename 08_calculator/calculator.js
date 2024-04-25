const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
  let sum = 0;
	array.forEach(item => sum += item);

  return sum;
};

const multiply = function(array) {
  return array.reduce((a, b) => a * b)
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	if (num == 0) return 1;
  let product = 1;

  for (let i = num; i > 1; i--) {
    product *= i;
  }

  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
