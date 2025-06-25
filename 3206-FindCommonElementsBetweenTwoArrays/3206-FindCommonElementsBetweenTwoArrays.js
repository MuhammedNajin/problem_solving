// Last updated: 6/25/2025, 3:29:45 PM
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    let count1 = 0;
    let count2 = 0;
    nums1.forEach((el) => {
        if(nums2.indexOf(el) != -1){
           count1++;
        }
    })
    nums2.forEach((el) => {
        if(nums1.indexOf(el) != -1){
           count2++;
        }
    })
    
    return [count1, count2]
};