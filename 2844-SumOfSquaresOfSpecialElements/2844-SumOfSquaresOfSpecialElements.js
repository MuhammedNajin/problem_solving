// Last updated: 6/25/2025, 3:30:31 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let num = 0;
    nums.forEach( (el, i ) => {
        if( nums.length % ( i + 1 )  == 0) {
            console.log(el)
          num += el * el;
        }
    })

    return num
    
};