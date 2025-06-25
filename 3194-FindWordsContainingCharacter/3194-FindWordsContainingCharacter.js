// Last updated: 6/25/2025, 3:29:46 PM
/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
 const num = [];
    words.forEach((el, i) => {
        if(el.indexOf(x) != -1) {
           num.push(i)
        }
    })
    return num;
};