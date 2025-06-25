// Last updated: 6/25/2025, 3:32:05 PM
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    const cat = { 'type': 0, 'color': 1, 'name': 2 };
    items.forEach((el) => {
       if(el[cat[ruleKey]] === ruleValue) {
         count++;
       }
    })

    return count;
};