from collections import deque

class Solution(object):
  def combinationSum(candidates, target):
    result = []
    
    def dfs(i, cur, total):
      if total == target:
        result.append(cur.copy())
        return

      if i >= len(candidates) or total > target:
        return
      
      cur.append(candidates[i])
      dfs(i, cur, total + candidates[i])
      cur.pop()
      dfs(i + 1, cur, total)

    dfs(0, [], 0)
    return result
  
  print(combinationSum([2,3,6,7],7))
