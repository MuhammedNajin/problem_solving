// Last updated: 6/25/2025, 3:31:08 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {

       n = nums.length
    res = 0
    
    for (let i = 0; i < n - 2; i++)
        for (let j = i + 1; j < n - 1; j++)
            for (let k = j + 1; k < n; k++)
                if (nums[i] != nums[j] && nums[i] != nums[k] && nums[j] != nums[k])
                    res++
    
    return res
    
};