// Last updated: 6/25/2025, 3:33:05 PM
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const alreadyFilledColor=image[sr][sc]
    const fillColor=(i,j)=>{
        if(i>=0&&i<image.length&&j>=0&&j<image[0].length&&image[i][j]===alreadyFilledColor){
            image[i][j]=color
            fillColor(i,j+1)
            fillColor(i,j-1)
            fillColor(i+1,j)
            fillColor(i-1,j)
        }
    }
    image[sr][sc]!==color && fillColor(sr,sc)
    return image
};