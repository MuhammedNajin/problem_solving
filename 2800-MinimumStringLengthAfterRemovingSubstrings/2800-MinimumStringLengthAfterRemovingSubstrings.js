// Last updated: 6/25/2025, 3:30:33 PM
/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (stack.length == 0) {
            stack.push(char);
        } else if (char === 'B' && stack.at(-1) === 'A') {
            stack.pop();
        } else if (char === 'D' && stack.at(-1) === 'C') {
            stack.pop()
        } else {
            stack.push(char);
        }
    }

    return stack.length;
};