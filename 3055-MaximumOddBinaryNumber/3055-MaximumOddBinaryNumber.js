// Last updated: 6/25/2025, 3:29:58 PM
/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    const arr = s.split('').sort((a, b) => b - a)
    arr.shift()
    arr.push(1);
    return arr.join('')

    
};