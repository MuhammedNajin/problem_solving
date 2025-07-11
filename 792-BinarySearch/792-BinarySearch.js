// Last updated: 6/25/2025, 3:32:58 PM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid = 0;
    while (left <= right) {

        mid = Math.floor((right + left) / 2);


        if (nums[mid] == target) {
            return mid;
        } else if (target > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};