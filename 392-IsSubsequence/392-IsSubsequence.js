// Last updated: 6/25/2025, 3:33:37 PM
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let result = ''
    let j = 0;

    for (let i = 0; i < t.length; i++) {
        if (t[i] == s[j]) {
            result += t[i];
            j++;
        }

    }
    console.log(result)
    return result === s;
};