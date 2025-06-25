// Last updated: 6/25/2025, 3:29:43 PM
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function(s1, s2, s3) {
    
    let ops = -1;
    for(let i = 0; i < s1.length; i++) {
        if(s1[i] !== s2[i] || s2[i] !== s3[i]) {
            break;
        }
        ops = i + 1;
    }

    return ops != -1 ? (s1.length + s2.length + s3.length) - (3 * ops) : -1;
};