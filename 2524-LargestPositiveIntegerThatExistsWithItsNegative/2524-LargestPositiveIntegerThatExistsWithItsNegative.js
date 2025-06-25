// Last updated: 6/25/2025, 3:31:14 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let arr = new Set(nums);
    let sort = nums.sort((a, b) => a - b);
    console.log(sort, arr)
    for(let i = nums.length - 1; i > 0; i--) {
        console.log(arr.has(-sort[i]), -sort[i])
        if(arr.has(-sort[i])) {
           return sort[i];
        }
    }

    return -1
};