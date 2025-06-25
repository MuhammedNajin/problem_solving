// Last updated: 6/25/2025, 3:32:17 PM
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let result = 0;
     words.forEach((word) => {
        let flag = true;
        for(let el of word) {
            if(allowed.indexOf(el) == -1) {
                flag = false;
                break;
            }
        }
        if(flag) {
          result++;
        }
     })
   return result;
};