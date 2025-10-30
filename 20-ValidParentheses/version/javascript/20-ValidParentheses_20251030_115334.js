// Last updated: 10/30/2025, 11:53:34 AM
// Valid parentheses with stack
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const openBrace = '([{';
    const brakets = {
        ')': "(",
        "]": "[",
        "}": "{",
    }
    const stack = []

    for(let i = 0; i < s.length; i++) {
        let el = s[i]
        if(openBrace.includes(el)) {
             stack.push(el);
        } else if(stack.length == 0 || brakets[el] !== stack.pop()){
             return false;
        }
    }

    return stack.length > 0 ? false : true;
};