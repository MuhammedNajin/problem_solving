// Last updated: 6/25/2025, 3:31:40 PM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    const num = [];
   
    nums.sort((a, b) => a - b);
    

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == target) {
            num.push(i);
        }
    }
  
    return num;
};