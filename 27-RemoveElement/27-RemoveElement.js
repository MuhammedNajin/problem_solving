// Last updated: 6/25/2025, 3:35:17 PM
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var count = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[count]=nums[i];
            count++
        }
    }
    return count; 
};