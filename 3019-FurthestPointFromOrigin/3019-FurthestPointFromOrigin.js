// Last updated: 6/25/2025, 3:30:04 PM
/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let count1 = 0
    let count2 = 0

    for(let el of moves) {
        if(el === 'L') count1++
        if(el === 'R') count1--;
        if(el === '_') count2++
    }
    
   return Math.abs(count1) + count2
};