def uniqueOccurrences(arr):
  m = {}
  s = set()

  for i in arr:
    if i not in m:
      m[i] = 1
    else:
      m[i] += 1
  
  for i in m.values():
    if i not in s:
      s.add(i)
    else:
      return False
    
  return True



print(uniqueOccurrences([1,2]))