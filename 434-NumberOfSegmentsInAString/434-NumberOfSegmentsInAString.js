// Last updated: 6/25/2025, 3:33:27 PM
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let count = 0;
    s.split(' ').forEach((el) => {
        if(el !== '') {
            count++;
        }
    })
    return count;
};