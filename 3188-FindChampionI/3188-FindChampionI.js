// Last updated: 6/25/2025, 3:29:48 PM
/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
   const result = [];
   
    grid.forEach((el) => {
        let sum = 0;
        for(let i of el) {
            sum += i
        }
        result.push(sum);
    })
   
   const largest = result.reduce((acc, crr) =>  crr > acc ? acc = crr : acc , 0);
 
   return result.indexOf(largest);
};