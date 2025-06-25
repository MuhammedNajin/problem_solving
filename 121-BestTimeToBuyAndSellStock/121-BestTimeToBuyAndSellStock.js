// Last updated: 6/25/2025, 3:34:32 PM
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let left = 0;
    let right = 1;
    let maxProfit = 0;

    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            const profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit);
        } else {
            left = right;
        }
            right += 1;
    }

    return maxProfit;
};