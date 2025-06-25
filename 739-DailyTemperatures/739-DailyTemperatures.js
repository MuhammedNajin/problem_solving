// Last updated: 6/25/2025, 3:33:03 PM
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const length = temperatures.length;
    const stack = [0]
    const answer = Array(length).fill(0);

    for(let i = 1; i < temperatures.length; i++) {
           while(temperatures[i] > temperatures[stack.at(-1)]) {
                 answer[stack.at(-1)] = i - stack.at(-1);
                 stack.pop();
           }
           stack.push(i)
        
    }
    return answer;
};