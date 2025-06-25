// Last updated: 6/25/2025, 3:34:28 PM
/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
    if(!node) return null;

    const hash_table = new Map();

    const dfs = (node) => {
    

        if (hash_table.has(node.val)) {
            return hash_table.get(node.val)
        }

        const newNode = new _Node(node.val);
        hash_table.set(node.val, newNode);

        for (let nie of node.neighbors) {
            newNode.neighbors.push(dfs(nie));
        }

        return newNode;

    }

    return dfs(node);
};