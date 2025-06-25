// Last updated: 6/25/2025, 3:33:31 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let set = new Set(nums.sort((a, b) => a - b));
    console.log(set)
    const array = [...set];
    console.log(array)
    if(array.length < 3) {
       return array[array.length - 1];
    } else {
        return array[array.length - 3]
    }

};