class Solution(object):
    def searchRange(nums, target):
      def binSearch(nums, target, leftBias):
        l, r  = 0, len(nums) - 1
        i = -1
        while l <= r:
          m = (l + r) // 2
          if target > nums[m]:
              l = m + 1
          elif target < nums[m]:
              r = m - 1
          else :
            i = m
            if leftBias:
              r =  m - 1

            else:
              l = m + 1

        return i
       

      left = binSearch(nums, target, True )
      right = binSearch(nums, target, False )

      return [left, right]


    print(searchRange([5,7,7,8,8,10], 8))