const repeatString = function (str, timesRepeated) {
  if (timesRepeated < 0) return "ERROR";
  let repeatedString = "";
  for (i = 0; i < timesRepeated; i++) {
    repeatedString += str;
  }
  return repeatedString;
};
// Do not edit below this line
module.exports = repeatString;
