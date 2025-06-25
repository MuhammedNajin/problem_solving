// Last updated: 6/25/2025, 3:31:32 PM
/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    try {

        const seqence = ["999", "888", "777", "666", "555", "444", "333", "222", "111", "000"]
        for(let i = 0; i < seqence.length; i++) {
            if(num.includes(seqence[i])) {
                return seqence[i];
            }
        }
      return ""
    } catch(error) {
        console.log(error)
    }
};