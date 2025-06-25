// Last updated: 6/25/2025, 3:32:53 PM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  const num = [];
  nums.sort((a, b) => a - b);
  nums.forEach((el) => {
      if(el % 2) {
         num.push(el)
      } else {
          num.unshift(el);
      }
  })
    return num;
};