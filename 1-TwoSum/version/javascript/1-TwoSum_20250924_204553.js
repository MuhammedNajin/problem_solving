// Last updated: 9/24/2025, 8:45:53 PM
// two sum solution with o(n) time complexity
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = new Map();
    const result = []

    for(let i = 0; i < nums.length; i++) {
        const el = nums[i]
        const differece = target - el;
        if(hash.has(differece)) {
           result.push(i, hash.get(differece));
        }
        hash.set(el, i)
    }

    return result;
};