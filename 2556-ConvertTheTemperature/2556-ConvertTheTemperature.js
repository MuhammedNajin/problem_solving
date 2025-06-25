// Last updated: 6/25/2025, 3:31:10 PM
/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    const num = [];
    num.push(celsius + 273.15, (celsius * 1.80) + 32.00 );
    return num
};