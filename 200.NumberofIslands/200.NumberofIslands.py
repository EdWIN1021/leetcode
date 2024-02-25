from collections import deque


grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

def numIslands(grid):
  if not grid:
    return 0

  rows, cols = len(grid), len(grid[0])
  visited = set()
  total = 0

  def bfs(r,c):
    q = deque()
    visited.add((r,c))
    q.append((r,c))

    while q:
      row, col = q.popleft()
      d = [[-1, 0], [1, 0], [0, -1], [0, 1]]
      for dr, dc in d:
        r, c = row + dr, col + dc
        if r in range(rows) and c in range(cols) and (r, c) not in visited and grid[r][c] == "1":
          q.append((r,c))
          visited.add((r,c))

  for r in range(rows):
    for c in range(cols):
      if (r,c) not in visited and grid[r][c] == "1":
        bfs(r,c)
        total+=1
  return total


print(numIslands(grid))
