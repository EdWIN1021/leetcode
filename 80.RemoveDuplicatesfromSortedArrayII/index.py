def removeDuplicates(nums):
  dict = {}
  i = 0

  while i < len(nums):
    if nums[i] not in dict:
      dict[nums[i]] = 1

    elif dict[nums[i]] >= 2:
      nums.pop(i)
      i-=1

    else:
      dict[nums[i]] += 1

    i+=1



removeDuplicates([1,1,1,2,2,3])