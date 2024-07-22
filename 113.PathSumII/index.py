class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

root = TreeNode(5, TreeNode(4, TreeNode(11, TreeNode(7), TreeNode(2))), TreeNode(8, TreeNode(13), TreeNode(4, TreeNode(5), TreeNode(1))))

def pathSum(root, targetSum):
  res = []  

  def dfs(root, currSum, currArr):
    if not root:
      return []

    if not root.left and not root.right:
      if (currSum + root.val) == targetSum:
         currArr.append(root.val)
         res.append(currArr.copy())
         currArr.pop()
      return
       
     
    currSum += root.val
    currArr.append(root.val)

    dfs(root.left, currSum, currArr)
    dfs(root.right,currSum, currArr)

    currArr.pop()
    
  dfs(root, 0, [])


  return res

print(pathSum(root, 22))
        

