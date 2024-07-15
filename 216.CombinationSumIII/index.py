def combinationSum3(k, n):
    def backtrack(start, path, k, n):
        # If the combination is of length k and sums up to n, add it to the result
        if k == 0 and n == 0:
            result.append(path)
            return
        # If the combination exceeds length k or sum n, stop the exploration
        if k < 0 or n < 0:
            return
        
        # Try all numbers from `start` to 9
        for i in range(start, 10):
            # Recursively explore the next number, reducing k and n appropriately
            backtrack(i + 1, path + [i], k - 1, n - i)
    
    result = []
    backtrack(1, [], k, n)
    return result


combinationSum3(3, 9)