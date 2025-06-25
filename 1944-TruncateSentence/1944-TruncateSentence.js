// Last updated: 6/25/2025, 3:32:01 PM
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
  return s.split(' ').slice(0, k).join(' ')
};