// Last updated: 6/25/2025, 3:29:24 PM
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let sum = 0;
     const indexMap = new Map() 
     for(let i = 0; i < t.length; i++) {
        indexMap.set(t[i], i);

     }
     console.log(indexMap)
      for(let i = 0; i < s.length; i++) {
        console.log(indexMap.get(s[i]))
          sum += Math.abs(i - indexMap.get(s[i]));
      }

      return sum;
};