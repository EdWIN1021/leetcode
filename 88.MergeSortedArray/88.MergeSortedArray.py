def merge(nums1, m, nums2, n):
  l = len(nums1)-1

  while m > 0 and n > 0:
    if nums2[n-1] > nums1[m-1]:
      nums1[l] = nums2[n-1]
      n -=1
    else:
      nums1[l] = nums1[m-1]
      m -= 1
    l -= 1
  
  while n > 0:
    nums1[l] = nums2[n-1]
    n -= 1
    l -= 1
  print(nums1)
  

merge([0], 0, [1], 1)