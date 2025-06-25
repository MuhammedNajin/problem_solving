// Last updated: 6/25/2025, 3:34:13 PM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head, prev = null) {
    if(!head) return prev;
    
     const next = head.next;
     head.next = prev
     return reverseList(next, head);
};


