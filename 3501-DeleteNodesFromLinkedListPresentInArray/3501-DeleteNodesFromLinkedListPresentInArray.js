// Last updated: 6/25/2025, 3:29:22 PM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    const hashTable = new Set(nums);
    console.log("set", hashTable);
 let node = head
 let prev = null
    while(node) {

        if(node.next === null && hashTable.has(node.val)) {
           prev.next = null
           break;
        }
        console.log("val", node.val)
        if(hashTable.has(node.val)) {
            node.val = node.next.val;
            node.next = node.next.next
        } else {
            prev = node;
             node = node.next;
            
        }
         
       
    }

    return head;
};