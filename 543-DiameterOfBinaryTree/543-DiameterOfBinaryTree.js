// Last updated: 6/25/2025, 3:33:13 PM
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
var diameterOfBinaryTree = function(root) {
    let res = 0;

    const dfs = (crr) => {


         if(!crr) return 0;

         const left = dfs(crr.left);
         const right = dfs(crr.right);

         res = Math.max(res, (right + left));

         return 1 + Math.max(left, right);
    }

    dfs(root);

    return res;
};