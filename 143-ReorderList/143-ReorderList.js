// Last updated: 6/25/2025, 3:34:23 PM
var reorderList = function(head) {
    if (!head || !head.next) return;

    // Step 1: Find middle
    let slow = head, fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse second half
    let second = slow.next;
    slow.next = null; // Cut the list in half
    let prev = null;
    while (second) {
        let next = second.next;
        second.next = prev;
        prev = second;
        second = next;
    }

    // Step 3: Merge two halves
    let first = head;
    second = prev;
    while (second) {
        let temp1 = first.next;
        let temp2 = second.next;

        first.next = second;
        second.next = temp1;

        first = temp1;
        second = temp2;
    }
};
