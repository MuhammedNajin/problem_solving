// Last updated: 6/25/2025, 3:31:37 PM
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    const result = [];
    sentences.forEach(el => {
       result.push( el.split(' ').length ) ;
    })

    return Math.max(...result);
};