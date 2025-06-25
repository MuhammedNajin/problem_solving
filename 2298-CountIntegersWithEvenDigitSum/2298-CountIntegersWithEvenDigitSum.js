// Last updated: 6/25/2025, 3:31:35 PM
/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
    let count = 0;
    for (let i = 2; i <= num; i++) {
        if (i % 10 == i) {
            if(i % 2 == 0) count++;
        } else {
           
            let num = i
            let digitSum = 0;
            while (num) {

                digitSum += num % 10;
                num = Math.floor(num / 10)
                console.log(num, digitSum)
            }
            if(digitSum % 2 == 0) {
                count++;
            }
        }
    }
   return count;
};