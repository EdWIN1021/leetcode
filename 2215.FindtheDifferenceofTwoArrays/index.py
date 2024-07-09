def findDifference(nums1, nums2):
  num1Set, num2Set = set(nums1), set(nums2)
  result1, result2 = set(), set()

  for i in num1Set:
    if i not in num2Set:
      result1.add(i)

  
  for i in num2Set:
    if i not in num1Set:
      result2.add(i)

  return [list(result1), list(result2)]

print(findDifference([1,2,3], [2,4,6]))