// Last updated: 6/25/2025, 3:32:15 PM
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const result = []
    accounts.forEach((el) => {
        let sum = 0;
        while(el.length) {
          sum += el.pop();
        }
        result.push(sum);
    })
   return Math.max(...result);
};