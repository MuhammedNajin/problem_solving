// Last updated: 6/25/2025, 3:30:29 PM
/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
   let count = 0
    words.forEach( (el, i) => {
      for(let j = i + 1; j < words.length; j++ ) {
          let reversed = words[j].split('').reverse();
          console.log(reversed)
          if(el === reversed.join('')) {
              count++;
          }
      }
    })
    return count;
};