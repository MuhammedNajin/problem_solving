// Last updated: 6/25/2025, 3:35:00 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	
    return findMaxSumInArr(nums);
    
	
    function findMaxSumInArr(arr){
       
        if (arr.length === 1){
            return arr[0];
        }
		
        if (arr.length === 0){
            return -Infinity;
        }
        
		
        let length = arr.length - 1;
        let mid = Math.floor( length/2 );
      
        let lMaxSumInSubArr = findMaxSumInArr( arr.slice(0, mid) );
        let rMaxSumInSubArr = findMaxSumInArr( arr.slice(mid + 1, length + 1) );
        
        let lMaxContiguousSum = 0,
            rMaxContiguousSum = 0;
        
        for (let i = mid - 1, currContiguousSum = 0; i >= 0; i--){
            currContiguousSum += arr[i];
            lMaxContiguousSum = Math.max(lMaxContiguousSum, currContiguousSum);
        }

        for (let i = mid + 1, currContiguousSum = 0; i <= length; i++){
            currContiguousSum += arr[i];
            rMaxContiguousSum = Math.max(rMaxContiguousSum, currContiguousSum);
        }
        
        return Math.max(
            lMaxContiguousSum + arr[mid] + rMaxContiguousSum, 
            lMaxSumInSubArr, 
            rMaxSumInSubArr  
        );
    }
}
