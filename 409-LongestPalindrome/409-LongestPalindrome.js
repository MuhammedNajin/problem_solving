// Last updated: 6/25/2025, 3:33:35 PM
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const seen = new Set();
    let res = 0
    for(let el of s) {
         if(seen.has(el)) {
             seen.delete(el)
             res += 2;
         } else {
             seen.add(el);
         }
    }

    return res < s.length ? res + 1 : res;
};