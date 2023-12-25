const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // const countCats = ([[0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2]])
  // const reg = /\^\^\,|\,\^\^/gm
  // const h = matrix.flat().join(',')
  // console.log(h)
  // console.log(h.match(reg))
  // return h.match(reg) !== null ? h.match(reg).length : 0

  const h = matrix.flat()
  const b = h.filter(el => el === '^^')
  return b.length
}

module.exports = {
  countCats
};
