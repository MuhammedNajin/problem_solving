// Last updated: 6/25/2025, 3:33:02 PM
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let ans = '';
    for(let c of s) {
        let n = c.charCodeAt()
        ans += n > 64 && n < 91 ? String.fromCharCode(n + 32) : c
    }
    return ans;
};