// Last updated: 6/25/2025, 3:33:29 PM
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const number1 = BigInt(num1)
    const number2 = BigInt(num2)
    console.log(number1, number2);
    return `${number1 + number2}`;
};