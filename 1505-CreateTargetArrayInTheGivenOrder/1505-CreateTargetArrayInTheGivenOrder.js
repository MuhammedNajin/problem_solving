// Last updated: 6/25/2025, 3:32:40 PM
/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    const target = [];
    for(let i = 0; i < nums.length; i++) {
       target.splice(index[i], 0, nums[i]); 
    }

    return target;
};