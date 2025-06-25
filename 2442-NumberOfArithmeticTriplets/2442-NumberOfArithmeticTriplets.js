// Last updated: 6/25/2025, 3:31:27 PM
/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let sum = 0;
    let hash = new Set();

    for(let i = 0; i < nums.length; i++) {
          const current = nums[i];
          if(hash.has(current - diff) && hash.has(current - 2 * diff)) {
            sum++;
          }
          hash.add(nums[i]);
    }

    return sum;
};