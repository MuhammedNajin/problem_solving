// Last updated: 6/25/2025, 3:33:45 PM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = new Map();
    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            const val = map.get(nums[i]);
            map.set(nums[i], val + 1);
        } else {
            map.set(nums[i], 1)
        }
    }
    const sortedArray = Array.from(map).sort((a, b) => b[1] - a[1])
    console.log(map, '\n', sortedArray)
    for (let i = 0; i < k; i++) {
        ans.push(sortedArray[i][0]);
    }

    return ans;
};