def removeStars(s):
  result = []
  for i in s:
    if i == "*":
      result.pop()    
    else:
      result.append(i)

  return "".join(result)

print(removeStars("leet**cod*e"))