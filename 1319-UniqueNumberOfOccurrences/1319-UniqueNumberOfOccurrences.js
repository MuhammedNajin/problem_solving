// Last updated: 6/25/2025, 3:32:45 PM
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map();
    for(let el of arr) {
        map.set( el ,(map.get(el) || 0) + 1)
    }
    const set = new Set(map.values());
    return map.size === set.size;
};