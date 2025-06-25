// Last updated: 6/25/2025, 3:31:59 PM
/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const arr = s.split(' ');
    const ans = Array(arr.length).fill('');

    for (let i = 0; i < arr.length; i++) {

        const index = arr[i][arr[i].length - 1];
        ans[Number(index) - 1] = arr[i].slice(0, arr[i].length - 1);
    }
    
    return ans.join(' ');
};