// Last updated: 6/25/2025, 3:33:59 PM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);

    let pre = 1;
    for (let i = 0; i < n; i++) {
        result[i] = pre;
        pre *= nums[i];
    }

    let suf = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suf;
        suf *= nums[i];
    }

    return result;
};