// Last updated: 6/25/2025, 3:29:27 PM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
    const arr1 = [nums[0]];
    const arr2 = [nums[1]];
   for(let i = 2; i < nums.length; i++) {
     if(arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
        arr1.push(nums[i])
     } else {
        arr2.push(nums[i])
     }
   }

   return [...arr1, ...arr2];
};