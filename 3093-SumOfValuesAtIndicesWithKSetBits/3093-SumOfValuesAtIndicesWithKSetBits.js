// Last updated: 6/25/2025, 3:29:56 PM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    
    let sum = 0
    nums.map((_, i) => i.toString(2)).map((x, i) => {
          const count = x.split('1').length - 1;
          if(count === k){
              sum += nums[i]
          }
})
  return sum;
}