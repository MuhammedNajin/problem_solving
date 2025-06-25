// Last updated: 6/25/2025, 3:32:25 PM
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let result = 0;
    
    for(let i = 0; i < arr.length; i++) {
        let subArray = [];
        let sum = 0
        for(let j = i; j < arr.length; j++) {
           subArray.push(arr[j]);
           sum += arr[j]
           if(subArray.length % 2) {
              result += sum;
           }
        }
    }

    return result;
};