// Last updated: 6/25/2025, 3:30:06 PM
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {


    for(let i = 0; i < 2; i++) {
       if( (s1[i] == s2[i] && s1[i + 2] == s2[i + 2]) || 
       (s1[i+ 2] == s2[i] && s1[i] == s2[i + 2])){

       } else {
           return false
       }
    }
      
    return true

};