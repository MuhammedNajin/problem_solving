// Last updated: 6/25/2025, 3:34:17 PM
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    let first = headA;
    let second = headB;
    while(first !== second) {
        first = !first ? headA : first.next;
        second = !second ? headB : second.next;
    } 
    return first;
};