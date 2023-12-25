const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // console.log(member.join(' '))
  // if (members.length > 0) {
  for (let i = 0; i < members.length; i = + 1) {
    if (typeof members[i] === 'string') {
      const k = members.sort()
      return k.map(word => word.trim()[0]).sort().join('').toUpperCase();
    } return false
  }
}
// }

module.exports = {
  createDreamTeam
};
