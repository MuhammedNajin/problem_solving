// Last updated: 6/25/2025, 3:33:41 PM
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = new Map();

    for(let el of magazine) {
         map.set(el, (map.get(el) || 0) + 1);
    }

    for(let el of ransomNote) {
        const count = map.get(el);
        const includes = map.has(el);
        

        if(!includes ||  count  === 0) {
            return false;
        }
        
        if(count > 0) {
            map.set(el, count - 1)
        }
    }

    return true;
};