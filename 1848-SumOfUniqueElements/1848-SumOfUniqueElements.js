// Last updated: 6/25/2025, 3:32:06 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
   let sum = 0
    for(let elem of nums) {
        if(nums.indexOf(elem) === nums.lastIndexOf(elem)) {
            sum += elem;
        }
    }
    return sum;
};