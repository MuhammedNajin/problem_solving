// Last updated: 6/25/2025, 3:30:23 PM
/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    const str = [];
     for(char of s) {
         char === 'i' ? str.reverse() : str.push(char);
     }
    return str.join('');
};