# Definition for a binary tree node.
class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

root = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))


def isBalanced(root):

  def dfs(root):
    if not root:
      return [True, 0]
    
    left = dfs(root.left)
    right = dfs(root.right)

    balanced = abs(left[1] - right[1]) <= 1 and left[0] and right[0]
    return [balanced, max(left[1], right[1]) + 1] 
  
  return dfs(root)[0]

isBalanced(root)