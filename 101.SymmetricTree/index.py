# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


root = TreeNode(1, TreeNode(2, TreeNode(3), TreeNode(4)), TreeNode(2, TreeNode(4), TreeNode(3)))


def isSymmetric(root):
    if not root:
        return True
    
    def check(root1, root2):
        if not root1 and not root2:
            return True
        
        if not root1 or not root2:
            return False
        
        if root1.val != root2.val:
            return False
        
        return check(root1.left, root2.right) and check(root1.right, root2.left)
    
    return check(root.left, root.right)

isSymmetric(root)
  
     
    
    
    




