// Last updated: 6/25/2025, 3:32:03 PM
/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const [ [a, b], [c, d]] = edges;
    return a === c || b === c ? c : d;
};