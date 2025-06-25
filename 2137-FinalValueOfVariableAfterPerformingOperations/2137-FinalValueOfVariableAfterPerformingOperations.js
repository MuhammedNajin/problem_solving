// Last updated: 6/25/2025, 3:31:48 PM
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;
    for(let el of operations) {
        if(el == '++X' || el == 'X++') {
            console.log('hi', el)
            x++;
        } else {
            x--;
        }
    }
    return x;
};