// Last updated: 6/25/2025, 3:34:30 PM
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = parsing(s);

    console.log(str)

    const mid = Math.floor(str.length / 2);

    // racecar

    for(let i = 0, j = str.length - 1; i < mid; i++, j--) {
        console.log(str[i], str[j]);
        if(str[i] !== str[j]) return false;
    }

    return true;
};

function parsing(s) {
     let str = '';

    for(let char of s) {
        const ASSCI_VALUE = char.charCodeAt(0);
        console.log(ASSCI_VALUE)
        if(ASSCI_VALUE > 96 && ASSCI_VALUE < 123) {
             str += char;
        } else if(ASSCI_VALUE > 64 && ASSCI_VALUE < 91) {
            str += char.toLowerCase()
        } else if(ASSCI_VALUE > 47 && ASSCI_VALUE < 58) {
            str += char;
        }
    }

    return str;
}