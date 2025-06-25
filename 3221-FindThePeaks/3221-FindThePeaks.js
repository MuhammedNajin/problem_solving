// Last updated: 6/25/2025, 3:29:39 PM
/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
    
    const index = [];

    mountain.forEach((el, i) => {
        if(i != 0 && i < mountain.length) {
            if(el > mountain[i - 1] && el > mountain[i + 1 ]) {
                index.push(i);
            }
        }
    })

    return index;
};