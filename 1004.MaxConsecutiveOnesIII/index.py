def longestOnes(nums, k):
  maxNum = 0
  currMax = 0

  j = k

  for i in range(len(nums)):
    if nums[i]:
      currMax += 1
    
    if nums[i] == 0:
      currMax += 1
      j -= 1

    if j == 0:
      maxNum = max(maxNum, currMax)
      currMax = 0
      j = k
      
  return maxNum




longestOnes([1,1,1,0,0,0,1,1,1,1,0],2)