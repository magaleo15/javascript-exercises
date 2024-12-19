const removeFromArray = function (array, ...valuesToBeRemoved) {
  for (i = 0; i < valuesToBeRemoved.length; i++) {
    let values = valuesToBeRemoved;
    if (array.indexOf(values[i]) >= 0) {
      array.splice(array.indexOf(values[i]), 1);
    }
  }
  return array;
};

module.exports = removeFromArray;
