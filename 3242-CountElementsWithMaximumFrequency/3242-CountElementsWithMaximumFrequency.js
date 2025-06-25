// Last updated: 6/25/2025, 3:29:36 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
   nums = nums.sort((a, b) => a - b);
  const result = nums.reduce((acc, crr) => {
    if(acc[crr]) {
        acc[crr]++;
    } else {
        acc[crr] = 1;
    }
    return acc;
  }, {});
  const maxFrequecies = Math.max(...Object.values(result));
  console.log(maxFrequecies)
  const maxElement = [...Object.values(result)].filter(num => num === maxFrequecies);
  return maxFrequecies * maxElement.length;
};
