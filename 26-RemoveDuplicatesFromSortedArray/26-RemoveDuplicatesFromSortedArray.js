// Last updated: 6/25/2025, 3:35:20 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
      let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) 
            nums[++i] = nums[j];
    }
    return ++i;
};