// Last updated: 6/25/2025, 3:32:55 PM
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
var middleNode = function(head) {
    let slow = head
    let fast = head

    while(fast && fast.next) {
         fast = fast.next?.next;
         slow = slow.next
    }

    return slow;
};