def largestAltitude(gain):
  result = [0]

  for i in range(len(gain)):
    result.append(result[i] + gain[i])
    
  return max(result)

largestAltitude([-5,1,5,0,-7])
    
    