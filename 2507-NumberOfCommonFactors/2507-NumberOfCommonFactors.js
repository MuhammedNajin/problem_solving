// Last updated: 6/25/2025, 3:31:18 PM
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    const greater = a > b ? a : b;
    const factor = []
    for(let i = 1; i <= greater; i++) {
        if(a % i == 0 && b % i == 0) {
            factor.push(i);
        }
    }
    return factor.length;
};