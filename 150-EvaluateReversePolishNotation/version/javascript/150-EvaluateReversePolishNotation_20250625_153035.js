// Last updated: 6/25/2025, 3:30:35 PM
// this solution use stack
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const rpnStack = [];
    const OPERATOR = ['+', '-', '*', '/'];

    for (let el of tokens) {
        if (OPERATOR.includes(el)) {
            const num2 = rpnStack.pop(); 
            const num1 = rpnStack.pop();
            let result;

            switch (el) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                   
                    result = Math.trunc(num1 / num2);
                    break;
            }

            rpnStack.push(result);
        } else {
            rpnStack.push(Number(el));
        }
    }

    return rpnStack.pop();
};
