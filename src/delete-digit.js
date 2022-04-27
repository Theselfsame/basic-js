const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n);
  let arrMode = [];
  for (let i = 0; i < str.length; i++) {
    let item = str.substring(0 , i) + str.substring(i+1)
    arrMode.push(item)
  }
  arrMode.sort((a, b) => b - a)
  return +arrMode[0];
}

module.exports = {
  deleteDigit
};
