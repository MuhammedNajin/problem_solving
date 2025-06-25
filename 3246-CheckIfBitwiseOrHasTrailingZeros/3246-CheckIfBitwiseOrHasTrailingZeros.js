// Last updated: 6/25/2025, 3:29:34 PM
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function(nums) {
    const n = nums.length;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(i != j && ((nums[i] | nums[j]) % 2 === 0)) {
                return true;
            }
        }
    }

    return false;
};