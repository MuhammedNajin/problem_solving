// Last updated: 6/25/2025, 3:29:32 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {
   const first = nums.shift();
   const num =  nums.sort((a, b) => a - b);
   console.log(num)
    return first + nums[0] + num[1];
};