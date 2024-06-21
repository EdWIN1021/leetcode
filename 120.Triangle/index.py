class Solution(object):
    def minimumTotal(triangle):
      dp = [0] * (len(triangle) + 1) 

      for row in triangle[::-1]:
        for index, value in enumerate(row):
          dp[index] = value + min(dp[index], dp[index + 1])

      return dp[0]



    minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])