// Last updated: 6/25/2025, 3:31:06 PM
/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let largest = -1;

    for(let el of strs) {
        let sum = 0
        let flag = false
         for(let char of el) {
           if(Number.isNaN(parseInt(char))) {
              flag = true
           }
         }
         if(flag) {
            sum += el.length
         } else {
            sum += parseInt(el);
         }
         if(sum > largest) {
            largest = sum;
         }
    }

    return largest;
};