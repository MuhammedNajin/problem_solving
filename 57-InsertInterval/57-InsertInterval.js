// Last updated: 6/25/2025, 3:34:57 PM
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const n = intervals.length;
    let i = 0;
    const res = [];
    
    while(i < n && intervals[i][1] < newInterval[0]) {
         res.push(intervals[i]);
         i++
    }

    while(i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }

    res.push(newInterval);

    while(i < n) {
         res.push(intervals[i]);
         i++
    }


    return res;
};