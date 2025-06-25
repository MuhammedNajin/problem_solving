// Last updated: 6/25/2025, 3:31:20 PM
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const person = {};
    
    for(let i = 0; i < names.length; i++) {
        person[heights[i]] = names[i];
    }
    heights.sort((a, b) => b - a);
    for(let i = 0; i < heights.length; i++) {
        names[i] = person[heights[i]];
    }

    return names;
};