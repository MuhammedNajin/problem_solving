// Last updated: 6/25/2025, 3:34:26 PM
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) return false
    
    let slow = head;
    let fast = head.next;

    while(fast && fast.next) {
        if(fast == slow) {
            return true;
        } 
        slow = slow?.next;
        fast = fast?.next?.next
    }

    return false;
};