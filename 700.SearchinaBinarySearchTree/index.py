class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


root = TreeNode(4, TreeNode(2, TreeNode(1), TreeNode(3)), TreeNode(7))

def searchBST(root, val):
  def dfs(root):
    if root == None:
      return None
    
    if root.val > val:
      return dfs(root.left)
    
    elif root.val < val:
      return dfs(root.right)
    
    else:
      return root
  
  return dfs(root)

print(searchBST(root, 2))