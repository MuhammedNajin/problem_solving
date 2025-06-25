// Last updated: 6/25/2025, 3:33:19 PM
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    const binary = num.toString(2);
    console.log(binary);
    let ans = ''
    for(let i = 0; i < binary.length; i++) {
        const bit = binary[i] == '1' ? '0' : '1';
        ans += bit
    } 
    return binaryToDecimal(ans);
};

function binaryToDecimal(binary) {
  let decimal = 0;
  let power = 0;

  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === '1') {
      decimal += 2 ** power;
    }
    power++;
  }
  return decimal;
}