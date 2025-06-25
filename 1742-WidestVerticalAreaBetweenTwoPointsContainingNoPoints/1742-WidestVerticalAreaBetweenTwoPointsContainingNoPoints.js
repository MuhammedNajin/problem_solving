// Last updated: 6/25/2025, 3:32:23 PM
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    points.sort((a, b) => a[0] - b[0]);
    let maxWidth = 0
    console.log(points);
    for(let i = 1; i < points.length ; i++) {
        let width = points[i][0] - points[i - 1][0];
        maxWidth = Math.max(maxWidth, width);
    }

    return maxWidth;
};