// Last updated: 6/25/2025, 3:32:31 PM
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {

    let arr = new Array();

    s = s.split('');

    for(let i = 0; i < s.length; i++) {
       
       arr[indices[i]] = s[i];

    }
   return arr.join('');
    
};