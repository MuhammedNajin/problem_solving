// Last updated: 6/25/2025, 3:33:43 PM
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map = new Map();
    const ans = []

    for(let el of nums2) {
         if(!map.has(el)) {
            map.set(el, [el, 1]);
         } else {
            map.get(el)[1] += 1;
         }
    }

    for(let el of nums1) {
      
        if(map.has(el) && ( map.get(el)[1] != 0)) {
            
            ans.push(el);
            map.get(el)[1] -= 1;
        }
    }
     return ans;
};

