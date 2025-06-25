// Last updated: 6/25/2025, 3:31:52 PM
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
    const max = 122;
    let num = '';
    for (let i = 0; i < s.length; i++) {
        num += (s[i].charCodeAt(0) + 26) - max;
    }
    console.log(num)
    let ans = 0
    for (let i = 0; i < k; i++) {
        let subNum = num.toString()
        num = 0

        for (let j = 0; j < subNum.length; j++) {

            num += Number(subNum[j]);
        }
    }
    return num;
};