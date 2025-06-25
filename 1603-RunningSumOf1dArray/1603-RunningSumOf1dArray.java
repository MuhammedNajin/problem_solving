// Last updated: 6/25/2025, 3:32:36 PM
class Solution {
     int i;
    public int[] runningSum(int[] nums) {

        for(i=1;i<nums.length;i++){
            nums[i]+=nums[i-1];
        }
        return nums;
    }
}

   