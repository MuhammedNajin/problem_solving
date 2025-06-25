// Last updated: 6/25/2025, 3:35:14 PM
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] == needle[0]) {
           for(let j = 0; j < needle.length; j++) {
               if(haystack[i + j] != needle[j]) {
                 break;
               } else if(j === needle.length - 1) {
                 return i;
               }
           }
        }
    }
    return -1;
};