board = [["A","B","C","E"],
         ["S","F","E","S"],
         ["A","D","E","E"]]

def exist(board, word):
 
  for i in range(len(board)):
    for j in range(len(board[0])):
      if board[i][j] == word[0]:
        visited = set()
        if backTrack(i, j, 0, word, board ,visited):
          return True 
  return False
        

def backTrack(i, j, w, word, board, visited):
  if board[i][j] != word[w]:
    return False
  
  visited.add((i, j))

  if w == len(word) - 1:
    return True

  for r, c in [[0,1],[0,-1],[1,0],[-1,0]]:
    if r + i in range(len(board)) and c + j in range(len(board[0])) and (r + i, c + j) not in visited:
      if backTrack(r + i, c + j, w + 1, word, board ,visited):
        return True
      
  visited.remove((i, j))
  return False 


print(exist(board,"AE"))

