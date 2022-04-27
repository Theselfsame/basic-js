const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  if (arr1.length >= arr2.length) {
    var arrFirst = arr1;
    var arrSec = arr2;
  } 
  if (arr1.length < arr2.length) {
    var arrFirst = arr2;
    var arrSec = arr1;
  }
  let count = 0
  first: for (let i = 0; i < arrFirst.length; i++) {
    let flag = true;
    for (let k = 0; k < arrSec.length; k++) {
      if (!flag) continue first;
      if(arrFirst[i] == arrSec[k]) {
        arrSec.splice(k, 1);
        flag = false
        count++;
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
