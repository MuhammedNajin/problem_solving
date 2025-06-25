// Last updated: 6/25/2025, 3:35:02 PM
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {}
    
    for (let i = 0; i < strs.length; i++) {
        const word = strs[i].split('').sort().join('')
        if(map[word]) {
           map[word].push(strs[i])
        } else {
           map[word] = [strs[i]];
        }
       
    }
    return Object.values(map);
};