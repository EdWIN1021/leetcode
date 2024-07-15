def maxOperations(nums, k):
    res = 0
    dict = {}

    for i in nums:
        if k - i in dict and dict[k - i] > 0:
            dict[k - i] -= 1
            res += 1
        else:
            if i in dict:
                dict[i] += 1
            else:
                dict[i] = 1

    return res


maxOperations([3,1,3,4,3], 6)







