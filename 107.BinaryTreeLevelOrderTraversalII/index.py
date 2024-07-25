from collections import deque


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


root = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))

class Solution:
  def levelOrderBottom(self, root):
    if not root:
       return []

    q = deque([root])
    res = []

    while q:
      level = []
      for _ in range(len(q)):
        curr = q.popleft()
        level.append(curr.val)

        if curr.left:
          q.append(curr.left) 

        if curr.right:
          q.append(curr.right)  

      res.append(level)

    res.reverse()
    return res


s = Solution().levelOrderBottom(root)
