const sumAll = function(num1, num2) {
  if (num1 < 0 || num2 < 0 || typeof(num1) != 'number' || typeof(num2) != 'number') return "ERROR";

  let result = 0;
  let big = Math.max(num1, num2);
  let small = Math.min(num1, num2);

  for (let i = small; i <= big; i++ ) {
    result += i;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
