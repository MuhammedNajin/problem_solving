// Last updated: 6/25/2025, 3:29:20 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    let min = Infinity;
    nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length / 2; i++) {
        const average = (nums[i] + nums[nums.length - i - 1]) / 2;
        if(min > average) {
            min = average
        }
    }

    return min;
};