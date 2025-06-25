// Last updated: 6/25/2025, 3:34:54 PM
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {

    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let res = '';

    while (i >= 0 || j >= 0 || carry > 0) {

        const bitA = i >= 0 ? parseInt(a[i]) : 0;
        const bitB = j >= 0 ? parseInt(b[j]) : 0;

        const sum = bitA + bitB + carry;

        res = (sum % 2) + res
        carry = Math.floor(sum / 2);


        j--;
        i--;
    }

    return res;
};