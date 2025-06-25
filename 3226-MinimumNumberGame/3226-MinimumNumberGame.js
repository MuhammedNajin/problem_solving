// Last updated: 6/25/2025, 3:29:38 PM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    const sortedArry = nums.sort((a, b) => a - b);
    const result = [];
    while(sortedArry.length) {
        const alice = sortedArry.shift();
        const bob = sortedArry.shift();
        result.push(bob, alice);

    }
    return result;

};