class Solution(object):
  def minDistance(word1, word2):
     # Create a cache matrix with dimensions (len(word1)+1) x (len(word2)+1)
        cache = [[float("inf")] * (len(word2) + 1) for i in range(len(word1) + 1)]

        # Initialize the last row of the cache matrix
        for j in range(len(word2) + 1):
            cache[len(word1)][j] = len(word2) - j

        # Initialize the last column of the cache matrix
        for i in range(len(word1) + 1):
            cache[i][len(word2)] = len(word1) - i

        # Fill the cache matrix from bottom right to top left
        for i in range(len(word1) - 1, -1, -1):
            for j in range(len(word2) - 1, -1, -1):
                if word1[i] == word2[j]:  # Correct comparison
                    cache[i][j] = cache[i + 1][j + 1]
                else:
                    cache[i][j] = 1 + min(cache[i + 1][j], cache[i][j + 1], cache[i + 1][j + 1])
        
        return cache[0][0]

    

  minDistance("horse","ros")  

