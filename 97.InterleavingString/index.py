class Solution(object):
    def isInterleave(s1, s2, s3):
      if len(s1) + len(s2) != len(s3):
         return False
      

      dp = [[False] * (len(s2) + 1) for i in range(len(s1) + 1)]
      dp[len(s1)][len(s2)] = True


      print(dp)




      for i in range(len(s1), -1, -1):
        for j in range(len(s2), -1, -1):
          if i < len(s1) and s1[i] == s3[i + j] and dp[i + 1][j]:
            dp[i][j] = True
          if j < len(s2) and s2[j] == s3[i + j] and dp[i][j + 1]:
            dp[i][j] = True

      print(dp)
      return dp[0][0]
    
    isInterleave("aabcc","dbbca","aadbbcbcac")



    """
      aadbbcbcac
      
        d       b      b      c      a
   a  [True,  False, False, False, False, False], 
   a  [True,  False, False, False, False, False], 
   b  [True,  True,  True,  True,  True,  False], 
   c  [False, True,  True,  False, True,  False], 
   c  [False, False, True,  True,  True,  True], 
      [False, False, False, False, False, True]
    """

 