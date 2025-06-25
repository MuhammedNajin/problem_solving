// Last updated: 6/25/2025, 3:33:00 PM
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    
  const jewel = new Set(jewels)
  

  return stones.split('').reduce((result, stones) => {
    return  result + jewel.has(stones)
  }, 0);
};