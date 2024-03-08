def search(nums, target) -> int:
  l, r = 0, len(nums) - 1

  while l <= r:
    mid = l + (r - l) // 2
    if nums[mid] == target:
      return mid

    if nums[mid] >= nums[l]:
      if nums[l] <= target <= nums[mid]:
        r = mid - 1
      else:
        l = mid + 1
    else:
      if nums[mid] <= target <= nums[r]:
        l = mid + 1
      else:
        r = mid - 1
      
  return -1


print(search([3,5,1], 3))
