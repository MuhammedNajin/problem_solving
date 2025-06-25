// Last updated: 6/25/2025, 3:30:00 PM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const collection = {};
    let operation = 0;

    for(let i = nums.length - 1; i >= 0; i--) {
        let el = nums[i]
        if(!collection[el] && el <= k) {
            console.log(el)
            operation++
            collection[el] = el;
        }
        if(operation == k) {
            return nums.length - i;
        }

    }

    console.log(operation)
    return operation
};