def findDuplicates(nums):

  # 1, 2, 3, 4, 5, 6, 7
  # 0, 1, 2, 3, 4, 5, 6

  res = []

  for n in nums:
    n = abs(n)
    if nums[n-1] < 0:
      res.append(n)

    nums[n-1] = -nums[n-1]
  return res




findDuplicates([4,3,2,7,8,2,3,1])