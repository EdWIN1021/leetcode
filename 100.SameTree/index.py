class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right


p = TreeNode(TreeNode(2), TreeNode(3))

q = TreeNode(TreeNode(2), TreeNode(3))



def isSameTree(p, q):
    def dfs(p, q):
      if not p and not q:
        return True
      
      if not p or not q:
        return False

      if q.val != p.val:
        return False

      left = dfs(p.left, q.left)
      right = dfs(p.right, q.right)

      return left and right
    
    return dfs(p,q)
       

print(isSameTree(p, q))