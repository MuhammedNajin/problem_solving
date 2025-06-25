// Last updated: 6/25/2025, 3:35:08 PM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
      for(let i = 0; i < nums.length; i++) {
          if(nums[i] == target) {
              return i;
          } else {
              nums.push(target);
              nums.sort((a, b) => a - b);
    
              for(let j = 0; j < nums.length; j++) {
                  if(nums[i] == target) {
                      return j;
                  }
              }
          }
      }
};