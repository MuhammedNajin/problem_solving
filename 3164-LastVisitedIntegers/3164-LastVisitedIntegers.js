// Last updated: 6/25/2025, 3:29:53 PM
/**
 * @param {string[]} words
 * @return {number[]}
 */
var lastVisitedIntegers = function(words) {
    const st = [];
    const ans = [];
    let conspre = 0;
    for (const word of words) {
        if (word === "prev") {
            conspre++;
            if (conspre <= st.length) {
                ans.push(st[st.length - conspre]);
            } else {
                ans.push(-1);
            }
        } else {
            st.push(parseInt(word));
            conspre = 0;
        }
    }
    return ans;
};