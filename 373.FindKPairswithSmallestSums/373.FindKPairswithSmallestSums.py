import heapq

def kSmallestPairs( nums1,  nums2, k):
  if not nums1 or not nums2 or k <= 0:
    return []

  min_heap = []
  result = []

  # Initialize the heap with the first element from nums1 paired with each element from nums2
  for j in range(min(len(nums2), k)):
    heapq.heappush(min_heap, (nums1[0] + nums2[j], 0, j))

  # Extract the smallest pairs from the heap
  while min_heap and len(result) < k:
    sum, i, j = heapq.heappop(min_heap)
    result.append((nums1[i], nums2[j]))

    if i + 1 < len(nums1):
      heapq.heappush(min_heap, (nums1[i + 1] + nums2[j], i + 1, j))
    
  return result
  
  



  






print(kSmallestPairs([1,7,11],
                     [2,4,6], 3))
 