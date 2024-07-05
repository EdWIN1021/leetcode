
def moveZeroes(nums):
  l, r = 0, 0

  for r in range(len(nums)):
    if nums[r] != 0:
      nums[l], nums[r] = nums[r], nums[l]
      l +=1 
    r+=1
  return nums

moveZeroes([0,1,0,3,12])
        