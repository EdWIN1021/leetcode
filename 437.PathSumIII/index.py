class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def pathSum(root: TreeNode, targetSum: int) -> int:
    def dfs(node, currentSum):
        if not node:
            return 0
        
        # Update the current sum with the value of the current node
        currentSum += node.val
        
        z = currentSum - targetSum

        # Calculate how many times we have seen a sum that would form a path sum to targetSum
        count = prefix_sums.get(currentSum - targetSum, 0)
        
        # Update the prefix_sums with the current sum
        prefix_sums[currentSum] = prefix_sums.get(currentSum, 0) + 1
        
        # Recurse on the left and right children
        count += dfs(node.left, currentSum)
        count += dfs(node.right, currentSum)
        
        # Decrement the count of the current sum to backtrack
        prefix_sums[currentSum] -= 1
        
        return count
    
    # Initialize the prefix_sums with the base case
    prefix_sums = {0: 1}  # Default sum = 0 has one count
    return dfs(root, 0)

# Example Usage
# Constructing the tree: 
#        10
#       /  \
#      5   -3
#     / \    \
#    3   2   11
#   / \   \
#  3  -2   1
root = TreeNode(10)
root.left = TreeNode(5)
root.right = TreeNode(-3)
root.left.left = TreeNode(3)
root.left.right = TreeNode(2)
root.right.right = TreeNode(11)
root.left.left.left = TreeNode(3)
root.left.left.right = TreeNode(-2)
root.left.right.right = TreeNode(1)

# Finding paths that sum to 8
result = pathSum(root, 8)
print(result)  # Output should be 3
