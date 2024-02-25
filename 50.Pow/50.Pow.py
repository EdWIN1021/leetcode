def myPow(x, n):
  result = 1
  i = 0
  
  while i < abs(n):
    result *= x
    i+=1

  return result if n > 0 else 1 / result

print(myPow(2.00000, -2))