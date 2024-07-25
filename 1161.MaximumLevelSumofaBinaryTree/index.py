from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

root = TreeNode(1, TreeNode(7, TreeNode(7), TreeNode(-8)), TreeNode(0))

def maxLevelSum(root):
    q = deque([root])
    level = 0
    max_level = 0
    maxSum = 0

    while q:
      currSum = 0
      level += 1

      for _ in range(len(q)):
        curr = q.popleft()
        currSum += curr.val

        if curr.left:
          q.append(curr.left)
        
        if curr.right:
          q.append(curr.right)


      if currSum > maxSum:
        maxSum = currSum
        max_level = level
    
    return max_level

print(maxLevelSum(root))