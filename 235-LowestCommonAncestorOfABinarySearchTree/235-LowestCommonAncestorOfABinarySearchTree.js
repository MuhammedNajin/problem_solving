// Last updated: 6/25/2025, 3:34:01 PM
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let crr = root;

    while(crr !== null) {
         if(crr.val > p.val && crr.val > q.val) {
            crr = crr.left;
         } else if(crr.val < p.val && crr.val < q.val) {
             crr = crr.right
         } else {
            return crr;
         }
    }

    return null
};