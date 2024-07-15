# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

root = TreeNode(3, TreeNode(1, TreeNode(3)), TreeNode(4, TreeNode(1), TreeNode(5)))

def goodNodes(root):

  def dfs(root, curMax):
    if not root:
       return 0

    curMax = max(curMax, root.val)

    if root.val >= curMax:
      return 1 + dfs(root.left, curMax) + dfs(root.right, curMax)
    
    else:
      return dfs(root.left, curMax) + dfs(root.right, curMax)

  return dfs(root, float('-inf'))

print(goodNodes(root))

  
        