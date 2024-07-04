def mergeAlternately(word1, word2):
  l = min(len(word1), len(word2))
  r = ""

  for i in range(l):
    r += word1[i] + word2[i]

  rest = word1 if len(word1) > len(word2) else word2
  
  return r + rest[l:]

mergeAlternately("abc","pqr")
