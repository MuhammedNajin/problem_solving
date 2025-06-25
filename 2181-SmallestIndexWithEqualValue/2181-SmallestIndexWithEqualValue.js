// Last updated: 6/25/2025, 3:31:42 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {

   return nums.findIndex((el, i) => i % 10 === el);
 
    
};