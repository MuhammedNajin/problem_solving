// Last updated: 6/25/2025, 3:29:19 PM
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
    let totalPairs = 0;
    for(let i = 0; i < nums1.length; i++) {
       for(let j = 0; j < nums2.length; j++) {
           if(nums1[i] % (nums2[j] * k) === 0) {
            console.log(i , j)
              totalPairs++;
           }
       }
    }

    return totalPairs++;
};