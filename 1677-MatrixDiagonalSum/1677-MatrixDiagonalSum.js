// Last updated: 6/25/2025, 3:32:29 PM
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    
    let sum = 0;
    for(let i = 0, j = mat.length - 1; i < mat.length; i++, j--) {
         if( mat.length % 2 && i === Math.floor( mat.length / 2 ) ) {  
            console.log('add', mat[i])
             sum += mat[i][i];
             continue;
         }
         console.log(mat[i], mat[i][i], mat[j], mat[i][j])
         sum += mat[i][i] + mat[i][j];
         console.log(sum)
    }

    return sum; 
};