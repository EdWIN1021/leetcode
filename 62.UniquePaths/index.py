def uniquePaths(m, n):
  result = [[0] * (n + 1) for i in range(m + 1)]
  result[m-1][n-1] = 1

  for i in range(m-1, -1, -1):
    for j in range(n-1, -1, -1):
      result[i][j] = max( result[i][j], result[i+1][j] + result[i][j+1])
  
  return result[0][0]

print(uniquePaths(3, 7))