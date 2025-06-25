// Last updated: 6/25/2025, 3:29:55 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
   const num = [];
    nums.forEach((el, index) => {
        for(let i = index + 1; i < nums.length; i++) {
            for(let j = i + 1; j < nums.length; j++) {
                num.push((el - nums[i]) * nums[j]);
            }
        }
    })
    
    return num.reduce((acc, crr) => crr > acc ? acc = crr : acc , 0)
};