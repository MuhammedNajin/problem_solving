// Last updated: 6/25/2025, 3:29:31 PM
/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
     s = s.toLowerCase();
    let count = 0;
    for(let i = 1; i < s.length; i++) {
        if(s[i - 1] !== s[i]) count++
    }
    return count;
};