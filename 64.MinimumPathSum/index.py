class Solution(object):
  def minPathSum(grid):
    ROWS, COLS = len(grid), len(grid[0])
    res = [[float("inf")] * (COLS + 1) for r in range(ROWS + 1)]
    res[ROWS - 1][COLS] = 0 


    # [[inf, inf, inf, inf], 
    #  [inf, inf, inf, inf], 
    #  [inf, inf, inf, 0], 
    #  [inf, inf, inf, inf]]

        
    for r in range(ROWS - 1, -1, -1):
      for c in range(COLS - 1, -1, -1):
          res[r][c] = grid[r][c] +  min(res[r + 1][c], res[r][c + 1]) 
        
    return res[0][0]

  minPathSum([[1,3,1],
              [1,5,1],
              [4,2,1]])