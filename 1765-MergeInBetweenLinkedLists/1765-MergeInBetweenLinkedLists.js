// Last updated: 6/25/2025, 3:32:20 PM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let start = list1;
    
    
    // Move to the 'a'-th node in list1
    for (let i = 0; i < a -1; i++) {
        start = start.next;
    }
    let end = start;
    for(let i = a ; i <= b + 1; i++) {
        end = end.next;
    }
     console.log(JSON.stringify(start));
    console.log(JSON.stringify(end));
    start.next = list2;
    console.log(JSON.stringify(start));
    while(list2.next !== null) {
        list2 = list2.next;
    }
    list2.next = end;
    console.log(start)
   return list1;
};