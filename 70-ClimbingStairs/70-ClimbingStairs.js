// Last updated: 6/25/2025, 3:34:52 PM
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = 1, b = 1;
   for(let i = 2; i <= n; i++) {
       [a, b] = [b, a + b];
   }
  return b;
};