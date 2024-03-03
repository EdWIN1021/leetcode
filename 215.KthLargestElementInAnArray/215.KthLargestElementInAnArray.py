import random
def findKthLargest(nums, k):
    if not nums: return
    p = random.choice(nums)

    left =  [x for x in nums if x > p]
    mid  =  [x for x in nums if x == p]
    right = [x for x in nums if x < p]

    print (left, mid, right)

    L, M = len(left), len(mid)
        
    if k <= L:
        return findKthLargest(left, k)
    elif k > L + M:
        return findKthLargest(right, k - L - M)
    else:
        return mid[0]


print(findKthLargest([1,9,8,20,18,20,80,2,190,2], 2))

