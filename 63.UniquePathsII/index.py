class Solution(object):
  def uniquePathsWithObstacles(obstacleGrid):
    ROW ,COL = len(obstacleGrid), len(obstacleGrid[0])
    dp = [0] * COL
    dp[COL - 1] = 1 
    
    for r in reversed(range(ROW)):
      for c in reversed(range(COL)):
        if obstacleGrid[r][c]:
          dp[c] = 0
        elif c + 1 < COL:
          dp[c] = dp[c] + dp[c + 1]

    return dp[0]

 

  uniquePathsWithObstacles( [[0,0,0],
                             [0,1,0],
                             [0,0,0]])  
                            #[0,0,1]
        