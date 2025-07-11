// Last updated: 6/25/2025, 3:34:40 PM
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
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

   return 1 + Math.max(left, right);
};