def summaryRanges(nums):
  res = []
  l, r = 0, 0

  while r < len(nums):
    if r + 1 == len(nums) or nums[r] + 1 != nums[r + 1]:
      if l == r:
         res.append(str(nums[l]))
      else:
        res.append(str(nums[l]) + "->" + str(nums[r]))
      
      l = r + 1

    r+=1
  


summaryRanges([0,1,2,4,5,7])