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
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // const a = s1.split('').sort()
  // const b = s2.split('').sort()
  // let k = []
  // for (let i = 0; i < a.length; i += 1) {
  //   if (b.find(a[i])) {
  //     k.push(a[i])
  //     a.concat
  //   }
  // }
}

module.exports = {
  getCommonCharacterCount
};
