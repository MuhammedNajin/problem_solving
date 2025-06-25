// Last updated: 6/25/2025, 3:34:21 PM
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const res = [];
    const stack = [];
    let crr = root;

    while(crr || stack.length > 0) {
         
         while(crr) {
             res.push(crr.val);
             stack.push(crr);
             crr = crr.left;
         }

         crr = stack.pop();
         crr = crr.right;

    }

    return res;
};