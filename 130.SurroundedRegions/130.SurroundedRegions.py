board = [["X","X","X","X"],
         ["X","O","O","X"],
         ["X","X","O","X"],
         ["X","O","X","X"]]

def solve(list):
  rows, cols = len(list), len(list[0])


  def dfs(i,j):
    if  i < 0 or j < 0 or i == rows or j == cols or list[i][j] != "O":
      return
    
    list[i][j] = "T"
    dfs(i+1, j)
    dfs(i-1, j)
    dfs(i, j+1)
    dfs(i, j-1)

  for i in range(rows):
    for j in range(cols):
      if list[i][j] == "O" and ( i in [0, rows-1] or j in [0, cols-1]):
        dfs(i, j)

  for i in range(rows):
    for j in range(cols):
      if list[i][j] == "O":
        list[i][j] = "X"

  for i in range(rows):
    for j in range(cols):
      if list[i][j] == "T":
        list[i][j] = "O"

   
    

    

 


solve(board)