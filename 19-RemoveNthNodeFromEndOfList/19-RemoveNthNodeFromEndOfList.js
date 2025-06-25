// Last updated: 6/25/2025, 3:35:27 PM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    class Node {
        constructor(data) {
            this.value = data;
            this.next = null;
        }
    }
    
    const dummy = new Node(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;

    for(let i = 0; i <= n; i++) {
        second = second.next;
    }
    while(second !== null) {
        second = second.next;
        first = first.next;
    }
    first.next = first.next.next;
    return dummy.next;
};