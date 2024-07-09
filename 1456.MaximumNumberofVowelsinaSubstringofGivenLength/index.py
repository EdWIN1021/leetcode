def maxVowels(s, k):
  result = 0
  curr = 0
  v = "aeiou"

  for i in range(len(s)):
    if i >= k: 
      if s[i-k] in v:
        curr -= 1

    if s[i] in v:
      curr += 1

    result = max(curr, result)

  return result

print(maxVowels("abciiidef", 3))