// Last updated: 6/25/2025, 3:31:01 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let digitSum = 0;
    let elemSum = 0;
    nums.forEach(e => {
        const digit = `${e}`
        if(!digit.length < 1) {
            for(let el of digit){
                digitSum += parseInt(el);
            }
        } else {
          digit += el;
        }
        elemSum += e;
    });

    return Math.abs(digitSum - elemSum);
};