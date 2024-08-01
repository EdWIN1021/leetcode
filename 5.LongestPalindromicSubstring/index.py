def longestPalindrome(s):
  resLen = 0
  res = ""

  for i in range(len(s)):
    l, r = i, i
    while l >= 0 and r < len(s) and s[l] == s[r]:
      currLen = r - l + 1
      if currLen  > resLen:
        resLen = currLen
        res = s[l:r+1]
      l-=1
      r+=1

    l, r = i, i+1
    while l >= 0 and r < len(s) and s[l] == s[r]:
      currLen = r - l + 1
      if currLen  > resLen:
        resLen = currLen
        res = s[l:r+1]
      l-=1
      r+=1

  return res

print(longestPalindrome("babad"))