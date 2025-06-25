// Last updated: 6/25/2025, 3:29:26 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let opp = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % 3 !== 0) {
           opp++;
        }
    }

    return opp;
};