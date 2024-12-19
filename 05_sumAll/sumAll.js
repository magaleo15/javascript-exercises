const sumAll = function (num1, num2) {
  if (num1 * num2 < 0) return "ERROR"; // negative
  else if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR"; // all other errors
  gaussianSum = ((Math.abs(num2 - num1) + 1) * (num1 + num2)) / 2; // gaussian sum formula still slower than solution
  return gaussianSum;
};

// gaussianway
// sum of a AP sn = n(a1+an)/2
// define n
// check greatest value
// Do not edit below this line
module.exports = sumAll;
