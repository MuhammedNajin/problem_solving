// Last updated: 6/25/2025, 3:32:19 PM
function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    
    let x = '';
    let y = '';
    for(let el of word1) {
        x += el;
    }
    for(let el of word2) {
        y += el;
    }
    return x === y;
};