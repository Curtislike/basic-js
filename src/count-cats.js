const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;
  for(let i = 0; i<matrix.length; i++) {
    let counter = matrix[i].filter(item => item == '^^');
    let length = counter.length;
    result += length;
    }
    return result;
};
