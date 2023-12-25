const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // console.log(domains)

  // const dd = [];
  // // var nat = 1;
  // // const jj = [];


  // for (let i = 0; i < domains.length; i++) {
  //   dd.push(domains[i].split('.').reverse())
  // }
  // console.log(dd)
  // for (let i = 0; i < dd.length; i++) {
  //   console.log(dd[i])
  //   for (let index = 0; index < dd[i].length; index++) {
  //     console.log(dd[i][index])
  //     const r = dd[i + 1][index]

  //     //     if (dd[i][index] === dd[i+1][index]){

  //     console.log(dd[i][index] === dd[i + 1][index]);
  //   }
  //   //   }
  // }
  // console.log(dd)
  // console.log(nat)

  // const h = dd.flat()
  // .filter((el) => el === 'ru')
  // console.log(h)
  // console.log(jj)

  // const l = new Object();
  //   l.ru = h.filter((el) => el === 'ru').length
  // console.log(l)

  // const y = parse
  // console.log(y)
  // const l = new Object();
  // l.ru = h.filter((el) => el === 'ru').length
}

module.exports = {
  getDNSStats
};
