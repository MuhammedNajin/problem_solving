// Last updated: 6/25/2025, 3:30:41 PM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    let leftSum = 0;
    let rightSum = nums.reduce((sum, crr) => sum += crr, 0);

    return nums.map( el => {
        rightSum -= el;
        let result = Math.abs(leftSum - rightSum);
        leftSum += el
        return result;
    });
};