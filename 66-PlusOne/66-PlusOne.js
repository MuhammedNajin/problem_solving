// Last updated: 6/25/2025, 3:34:56 PM
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let carry = 1; // Start with 1 to add
    let result = [];

    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + carry;
        if (sum === 10) {
            result.unshift(0); // If sum is 10, push 0 and carry over
            carry = 1;
        } else {
            result.unshift(sum);
            carry = 0; // No more carry needed
        }
    }

    // If there's still a carry left, add it to the front
    if (carry === 1) {
        result.unshift(1);
    }

    return result;
};
