// Last updated: 6/25/2025, 3:32:08 PM
/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
      const ans = [first];

    for(let i = 0; i < encoded.length; i++) {
        ans.push(encoded[i] ^ ans[i]);
    }
    return ans;
};