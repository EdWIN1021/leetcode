# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

root = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))



def maxDepth(root):
    def dfs(root):
        if not root:
            return 0

        return max(dfs(root.left), dfs(root.right)) + 1
  
    return dfs(root)




