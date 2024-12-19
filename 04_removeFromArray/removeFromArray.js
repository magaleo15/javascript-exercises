const removeFromArray = function (array, ...valuesToBeRemoved) {
  valuesToBeRemoved.forEach((value) => {
    while (array.includes(value)) {
      array.splice(array.indexOf(value), 1);
    }
  });
  return array;
};

// const removeFromArray = function (array, ...valuesToBeRemoved) {
//   for (i = 0; i < valuesToBeRemoved.length; i++) {
//     let values = valuesToBeRemoved;
//     while (array.includes(values[i])) {
//       array.splice(array.indexOf(values[i]), 1);
//     }
//   }
//   return array;
// };

module.exports = removeFromArray;
