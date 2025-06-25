// Last updated: 6/25/2025, 3:32:38 PM
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const result = [];
    const max = Math.max(...candies)
   for(let el of candies) {
      const value = el + extraCandies >= max ? true : false
      result.push(value);
   }
   return result;
};