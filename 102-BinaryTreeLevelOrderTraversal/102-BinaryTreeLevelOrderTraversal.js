// Last updated: 6/25/2025, 3:34:42 PM
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];

    let queue = [root];
    let result = [];

    while(queue.length > 0) {
         
        let nextLevel = [];
        let level = [];

        for(let node of queue) {
            level.push(node.val);
            node.left && nextLevel.push(node.left);
            node.right && nextLevel.push(node.right);
        }

        queue = nextLevel;
        result.push(level)
    }

    return result
};