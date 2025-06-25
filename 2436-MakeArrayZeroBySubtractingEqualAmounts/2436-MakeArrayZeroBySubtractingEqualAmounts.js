// Last updated: 6/25/2025, 3:31:28 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    let ops = 0;
    const freq = {};
    for (let i = 0; i < nums.length; i++) {

        if(nums[i] == 0) continue;

        if(freq[nums[i]] === undefined) {

            freq[nums[i]] = 1

        } else {

            freq[nums[i]]++;
        }

         if(freq[nums[i]] == 1) {
            ops++;
        }
    }

    return ops;
};