// Last updated: 6/25/2025, 3:35:31 PM
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const root = {children: {}, isEnd: false};
    let commonPrefix = ''
    for(let i = 0; i < strs.length; i++) {
        let node = root;
         for(let char of strs[i]) {
             if(!node.children[char]) {
                node.children[char] = { children: {}, isEnd: false };
             }
             node = node.children[char];
         }
         node.isEnd = true;
    }

    if(strs.length == 1) return strs[0];
    let node = root;
    while(node && !node.isEnd && Object.keys(node.children).length === 1) {
        let char = Object.keys(node.children)[0];
        commonPrefix += char;
        node = node.children[char];
    }
     
   return commonPrefix;
};