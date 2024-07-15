class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

root = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))

def minDepth(root):

  def dfs(root):
    if not root:
       return 0
    
    left = dfs(root.left)
    right = dfs(root.right)

    if not root.left or not root.right:
      return max(left, right) + 1

    return min(left, right) + 1
  
  return dfs(root)

print(minDepth(root))