class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


root1 = TreeNode(3, TreeNode(5, TreeNode(6), TreeNode(2, TreeNode(7), TreeNode(4))), TreeNode(1, TreeNode(9), TreeNode(8)))
root2 = TreeNode(3, TreeNode(5, TreeNode(6), TreeNode(7)), TreeNode(1, TreeNode(4), TreeNode(2, TreeNode(9), TreeNode(8))))


def leafSimilar(root1, root2):
    result1, result2 = [],[]

    def dfs(root, result):
      if root is None:
        return

      if root.left == None and root.right == None:
        result.append(root.val)
        return

      dfs(root.left,  result) 
      dfs(root.right, result) 


    dfs(root1, result1)
    dfs(root2, result2)
    
    return result1 == result2

print(leafSimilar(root1, root2))
        
      
      


