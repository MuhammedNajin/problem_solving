// Last updated: 6/25/2025, 3:31:56 PM
/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const freq = {};
    for(let el of s) {
        freq[el] = (freq[el] || 0) + 1;
    }
    return new Set(Object.values(freq)).size == 1;
};