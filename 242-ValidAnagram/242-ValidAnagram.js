// Last updated: 6/25/2025, 3:33:57 PM
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if(s.length !== t.length) return false;
    
    const map = new Map();

    for (let el of s) {
        map.set(el, (map.get(el) || 0) + 1)
    }

    for (let el of t) {
        const count = map.get(el);

        if (!count || count == 0) {
            return false;
        } else {
            map.set(el, count - 1);
        }
    }

    return true;
};