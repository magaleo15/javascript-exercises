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

// Do not edit below this line
module.exports = reverseString;
