// Last updated: 6/25/2025, 3:30:10 PM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    
    nums.sort((a, b) => a - b);
    console.log(nums)
    let pairs = 0;
    const length = nums.length - 1;
    for(let i = 0; i < length; i++) {
        let low = i + 1;
        let high = length;
       
       while(low <= high) {
         let mid = Math.floor((low + high) / 2);
         const val = nums[mid] + nums[i];
         if(val < target) {
            low = mid + 1;
         } else {
            high = mid - 1;
         }
       }

       pairs += high - i;
    }
    return pairs;
};