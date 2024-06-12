class Node(object):
  def __init__(self, val=False, isLeaf=False, topLeft=None, topRight=None, bottomLeft=None, bottomRight=None):
    self.val = val
    self.isLeaf = isLeaf
    self.topLeft = topLeft
    self.topRight = topRight
    self.bottomLeft = bottomLeft
    self.bottomRight = bottomRight


class Solution(object):
  def construct(grid):
    
    def dfs(n, r, c):
      allSame = True
      for i in range(n):
        for j in range(n):
          if grid[r][c] != grid[r + i][c + j]:
            allSame = False
            break 
      
      if allSame: 
        return Node(grid[r][c], True)

      else:
        n = n // 2
        topLeft = dfs(n, r, c)
        topRight = dfs(n, r, c + n)
        bottomLeft = dfs(n, r + n, c)
        bottomRight = dfs(n, r + n, c + n)
        return Node(0, False, topLeft, topRight, bottomLeft, bottomRight)

    return dfs(len(grid), 0, 0)



  construct([
            [1,1,1,1, 0,0,0,0],
            [1,1,1,1, 0,0,0,0],
            [1,1,1,1, 1,1,1,1],
            [1,1,1,1, 1,1,1,1],

            [1,1,1,1, 0,0,0,0],
            [1,1,1,1, 0,0,0,0],
            [1,1,1,1, 0,0,0,0],
            [1,1,1,1, 0,0,0,0]])