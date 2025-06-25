// Last updated: 6/25/2025, 3:32:34 PM
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
     const value = [];


    for(let i = 0; i < n; i++) {

        value.push(nums[i], nums[i + n]);
    }


    return value;
      

};