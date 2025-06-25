// Last updated: 6/25/2025, 3:32:32 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
     let answer = 0;
     let count = {}
    for(let el of nums) {
        answer += count[el] || 0;
        count[el] = (count[el] || 0) + 1;
    }
    return answer;
};