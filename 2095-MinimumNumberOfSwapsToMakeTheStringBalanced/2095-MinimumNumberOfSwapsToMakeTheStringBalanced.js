// Last updated: 6/25/2025, 3:31:50 PM
/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let closing = 0;
    let maxClosing = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '[')
           closing--;
        else
           closing++;
     maxClosing = Math.max(maxClosing, closing);     
    }
   return Math.floor((maxClosing + 1) / 2)
};