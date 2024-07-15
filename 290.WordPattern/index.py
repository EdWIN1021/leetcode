def wordPattern(pattern, s):
  arr = s.split(" ")
  dict = {}

  if len(arr) != len(pattern):
    return False

  for i, v in enumerate(pattern):
    if v not in dict:
      if arr[i] in dict.values():
        return False

      dict[v] = arr[i]
    
    elif dict[v] != arr[i]:
      return False
  return True

print(wordPattern("aaa", "aa aa aa aa"))
