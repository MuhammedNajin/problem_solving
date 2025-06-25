// Last updated: 6/25/2025, 3:33:22 PM
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
let hammingDistance = (x, y) => (x^y).toString(2).replace(/0/g,"").length