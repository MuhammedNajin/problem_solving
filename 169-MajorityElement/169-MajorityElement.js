// Last updated: 6/25/2025, 3:34:15 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = {}
    let max = -Infinity;
    let element = 0

    for(let el of nums) {
         map[el] = (map[el] || 0) + 1;
         const count = map[el];
         if(max < count) {
             max = count
             element = el;
         }
    }
    
  return max > (nums.length / 2) && element;
};