// Last updated: 6/25/2025, 3:33:52 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
   let slow = 0;
   let fast = 0;

   do {
      slow = nums[slow];
      fast = nums[nums[fast]];
   } while(slow != fast);

   slow = 0;
   while(slow != fast ) {
     slow = nums[slow];
     fast = nums[fast];
   }
   return slow;
}