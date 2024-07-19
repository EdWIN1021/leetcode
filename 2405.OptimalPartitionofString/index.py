def partitionString(s):
  subString = set()
  res = 1

  for i in s:
    if i  in subString:
      res += 1
      subString.clear()
    
    subString.add(i)
  return res

print(partitionString("abacaba"))