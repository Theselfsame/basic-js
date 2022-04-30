const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 * arM = [150, 190, 170, 160, 180]
 * arr = [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrIndex =[]
  arr.forEach((item, index) => {
    if(item == -1) {
      arrIndex.push(index)
    }
  })
  arrClean = arr.filter(item => item > 0)
  arrClean.sort((a,b) => {
    return a - b;
  })
  arrIndex.forEach(item => {
    arrClean.splice(item, 0, -1)
  })
  return arrClean;
}

module.exports = {
  sortByHeight
};
