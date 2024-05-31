from collections import deque;

class Solution(object):
    def minMutation(startGene, endGene, bank):
      
      q, visited = deque([[startGene, 0]]), set(startGene)

      while q:
        s, m = q.popleft()

        if s == endGene: return m

        for i in range(8):
           for ch in "ACGT":
              t = s[:i]+ch+s[i+1:]

              if t in bank and t not in visited:
                 visited.add(t)
                 q.append([t, m+1])
                 

      return -1


    print(minMutation("AACCGGTT","AAACGGTA",["AACCGGTA","AACCGCTA","AAACGGTA"]))
    