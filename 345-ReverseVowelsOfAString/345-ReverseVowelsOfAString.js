// Last updated: 6/25/2025, 3:33:47 PM
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
     const VOWELS = { 'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1 };
    const arr = s.split('');
    let i = 0, j = arr.length - 1;
    while (i < j) {
        if (VOWELS[arr[i]] && VOWELS[arr[j]]) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        } else if (VOWELS[arr[i]]) {
            j--;
        } else {
            i++;
        }
    }
    return arr.join('');
};