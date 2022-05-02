const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (arr instanceof Array == false) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let arrNew = arr.slice()
  for(let i = 0; i < arrNew.length; i++) {
     if (arrNew[i] == '--double-next' && i == arrNew.length - 1) {
      arrNew.splice(i,1);
    } else if (arrNew[i] == '--double-next') {
      arrNew[i] = arrNew[i+1]
    }
    if (arrNew[i] == '--discard-next' && i == arrNew.length - 1) {
      arrNew.splice(i,1);
    } else if (arrNew[i] == '--discard-next') {
      arrNew.splice(i,2);
    }



    if (arrNew[i] == '--double-prev' && i == 0) {
      arrNew.splice(i,1)
    }
    if (arrNew[i] == '--double-prev') {
      let item = arrNew[i]
      arrNew.splice(i-1,2,item,item)
    }
    if (arrNew[i] == '--discard-prev' && i == 0) {
      arrNew.splice(i,1)
    }
    if (arrNew[i] == '--discard-prev' && i != 0) {
      arrNew.splice(i-1,2)
    }
  }
  return arrNew;
}

module.exports = {
  transform
};
