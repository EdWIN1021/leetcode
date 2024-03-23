class Node:
  def __init__(self, val):
    self.val = val
    self.neighbors = []


def cloneGraph(node):
  oldToNew = {}

  def dfs(node):
    if node in oldToNew:
      return oldToNew[node]
    
    copy = Node(node.val)
    oldToNew[node] = copy

    for neighbor in node.neighbors:
      copy.neighbors.append(dfs(neighbor))
    return copy

  return dfs(node) if node else None

