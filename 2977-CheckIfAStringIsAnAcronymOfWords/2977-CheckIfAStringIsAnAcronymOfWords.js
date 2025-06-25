// Last updated: 6/25/2025, 3:30:08 PM
/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let ans = '';
    for(let i = 0; i < words.length; i++) {
        ans += words[i][0];
    }

    return ans === s;
};