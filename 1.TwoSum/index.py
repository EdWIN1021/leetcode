def twoSum(nums, target):

  dict = {}

  for i, v in enumerate(nums):
    if target - v not in dict:
      dict[v] = i
    
    else:
      return [dict[target - v], i]
   



print(twoSum([3,2,4], 6))