// Last updated: 6/25/2025, 3:34:37 PM
var sortedArrayToBST = function(nums) {
    // Helper function to build the BST recursively
    const buildBST = (start, end) => {
        // Base case: If start index exceeds end index, return null
        if (start > end) {
            return null;
        }
        
        // Find the middle element
        let mid = Math.floor((start + end) / 2);
        
        // Create a new TreeNode with the middle element
        let node = new TreeNode(nums[mid]);
        
        // Recursively build the left and right subtrees
        node.left = buildBST(start, mid - 1); // Left subtree from start to mid - 1
        node.right = buildBST(mid + 1, end);  // Right subtree from mid + 1 to end
        
        // Return the created node
        return node;
    };
    
    // Call the helper function with the full range of the array
    return buildBST(0, nums.length - 1);
};