def gcdOfStrings(str1, str2):
  
  isValid = True
  for i in range(len(str2)):
    if str1[i] != str2[i]:
      isValid = False


  return str1[len(str2):] if isValid else ""


print(gcdOfStrings("ABCDEF", "DEF"))