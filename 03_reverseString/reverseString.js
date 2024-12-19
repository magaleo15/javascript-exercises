const reverseString = function (str) {
  let stringToRevert = str;
  let revertedString = "";
  for (let i = stringToRevert.length - 1; i >= 0; --i) {
    revertedString += stringToRevert[i];
  }
  return revertedString;
  //   // start iterating from the last to first?
  //   // print iteration for testing purposes
};

// const reverseString1 = function (string) {
//   return string.split("").reverse().join("");
// };

// let a = "Leonardo";
// console.log(a.split(""));
// console.log(a.split("").reverse());
// console.log(a.split("").reverse().join(""));
// Do not edit below this line
module.exports = reverseString;
