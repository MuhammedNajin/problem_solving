// Last updated: 6/25/2025, 3:30:02 PM
/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {
    let set = new Set()
    nums.forEach(([i, j]) => {
        while (i <= j) {
            set.add(i)
            i++
        }
    })
    return set.size
};