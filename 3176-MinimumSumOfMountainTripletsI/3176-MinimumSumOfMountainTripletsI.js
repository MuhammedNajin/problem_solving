// Last updated: 6/25/2025, 3:29:50 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
    const len = nums.length;
    let res =[];

    for(let i=0;i<len-2;i++){
        for(let j=i+1;j<len-1;j++){
            for(let k=j+1;k<len;k++){
                if(i<j && j<k && nums[i]<nums[j] && nums[k]<nums[j]){
                    res.push(nums[i]+nums[j]+nums[k])
                }
            }
        }
    }
    console.log(res)
    if(res.length>0){
        return Math.min(...res);
    }
    else{
        return -1;
    }
};