// Last updated: 6/25/2025, 3:33:55 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const n = nums.length;
  const totalsum = (n * (n+1) / 2);
   const sum = nums.reduce((sum, num) => sum + num, 0);

  return totalsum - sum;
};