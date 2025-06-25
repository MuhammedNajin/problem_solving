// Last updated: 6/25/2025, 3:34:47 PM
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for(let i = 0, j = m; i < n; i++, j++) {
      
        nums1[j] = nums2[i];
    }
    console.log(nums1)
    nums1.sort((a, b) => a - b);
};