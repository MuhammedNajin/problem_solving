// Last updated: 6/25/2025, 3:32:11 PM
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let largest = 0;
    const answer = [0];
    let preffixSum = 0;
    for(let i = 0; i < gain.length; i++) {
        preffixSum += gain[i];
        answer.push(preffixSum);

        if(preffixSum > largest) {
            largest = preffixSum;
        }
    }

    return largest;
};