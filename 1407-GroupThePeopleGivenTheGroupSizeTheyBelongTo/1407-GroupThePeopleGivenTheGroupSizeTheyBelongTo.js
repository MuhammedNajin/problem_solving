// Last updated: 6/25/2025, 3:32:43 PM
/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let size = new Set(groupSizes);
    const result = []
    let group = []
    let map = new Map()
    for(let i = 0; i < groupSizes.length; i++) {
        const el = map.get(groupSizes[i]);
       if(el) {
          map.get(groupSizes[i]).push(i);
       } else {
          map.set(groupSizes[i], [i]); 
       }
    }
     console.log(map)
     size.forEach((el) => {
        console.log('set', el)
          const arr = map.get(el);
           for(let j = 0; j < arr.length; j++) {
            group.push(arr[j])
            if(el == group.length) {
                result.push(group);
                group = [];
            }
        }
     });

    return result;
};