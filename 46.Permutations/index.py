class Solution(object):

    def permute(nums):
      result = []

      def dfs(m):

        if len(m) == len(nums):
          result.append(m[:])  # Use a copy of m to avoid reference issues
          return

        for n in nums:
           if n not in m:
              m.append(n)
              dfs(m)
              m.pop() 

      dfs([])

      return result
    

    print(permute([1,2,3]))

