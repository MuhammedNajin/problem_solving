// Last updated: 6/25/2025, 3:31:58 PM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {

    const num = [];

    nums.forEach((el, i) => {

        num.push(nums[nums[i]]);
    })

    return num;
    
};