// Last updated: 6/25/2025, 3:30:12 PM
function maxSum(nums: number[]): number {
    let max = -1;
    const map: Map<number, number> = new Map();
    
    for(let num of nums) {
        const largest = getLargest(num);
       if(map.has(largest)) {
        const pairSum = map.get(largest) + num;
         max = Math.max(max, pairSum);
         map.set(largest, Math.max(map.get(largest), num));
       } else {
          map.set(largest, num)
       }
    }
   return max;
};

function getLargest(n: number): number {
  let largest = -1; 
  while(n > 0) {
     largest = Math.max(largest, n % 10);
     n = Math.floor(n / 10);
  } 
  return largest;
}