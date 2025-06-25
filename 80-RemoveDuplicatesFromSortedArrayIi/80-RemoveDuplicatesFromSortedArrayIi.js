// Last updated: 6/25/2025, 3:34:50 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== nums[i + 2]) { 
            nums[j] = nums[i];
            j += 1;
        }
        // console.log(j)
    }
     
     return j;
};