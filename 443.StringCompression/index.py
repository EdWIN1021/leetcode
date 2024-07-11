def compress(chars):
  count = 1

  for i in range(len(chars)-1, -1, -1):
    if i and chars[i] == chars[i-1]:
      chars.pop(i)
      count+=1
   
    else:
      if count > 1:
        for v in str(count)[::-1]:
          chars.insert(i+1, v)
        count = 1

  return len(chars)

print(compress(["a","a","b","b","c","c","c"]))

