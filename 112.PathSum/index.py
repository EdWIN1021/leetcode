# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right



root = TreeNode(5, TreeNode(4, TreeNode(11, TreeNode(7), TreeNode(2)), None), TreeNode(5, TreeNode(8, TreeNode(13), TreeNode(4, None, TreeNode(1)))))

def hasPathSum(root, targetSum):
  def dfs(root, currSum):
    if not root:
      return False
        
    if currSum + root.val == targetSum and (not root.left) and (not root.right):
      return True

    return dfs(root.left, currSum + root.val) or dfs(root.right, currSum + root.val)
   
    
  return dfs(root, 0)

print(hasPathSum(root, 22))