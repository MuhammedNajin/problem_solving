// Last updated: 6/25/2025, 3:33:11 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    let ans = 0
    const inc = nums.length / 2;
    console.log(inc)
    for(let i = 0; i < nums.length; i += 2 ) {
        ans += Math.min(nums[i], nums[i + 1]);
           
      
    }
    return ans;
};