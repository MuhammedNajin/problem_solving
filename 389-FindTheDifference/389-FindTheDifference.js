// Last updated: 6/25/2025, 3:33:40 PM
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) { 
  const sum1 = s.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
  const sum2 = t.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
  return String.fromCharCode(sum2 - sum1);
};