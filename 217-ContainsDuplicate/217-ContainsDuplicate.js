// Last updated: 6/25/2025, 3:34:09 PM
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = new Set();

    for(let i = 0; i < nums.length; i++) {
         if(map.has(nums[i])) return true;

         map.add(nums[i]);
    }

    return false;
    
};