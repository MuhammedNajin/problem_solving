// Last updated: 6/25/2025, 3:31:44 PM
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
     const set1 = new Set();
     const set2 = new Set();
     const ans = new Set();

     for(let el of nums1) {
        set1.add(el)
     }

     for(let el of nums2) {
        if(set1.has(el)) {
            console.log('el', el)
            ans.add(el)
        }
        set2.add(el)
     }

     for(let el of nums3) {
        if(set1.has(el) || set2.has(el)) {
            ans.add(el)
        }
     }

     return [...ans]
};