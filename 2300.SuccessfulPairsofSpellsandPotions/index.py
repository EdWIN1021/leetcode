def successfulPairs( spells, potions, success):
  potions.sort()
  result = []

  def bs(s, l, r):
    while l <= r:
      m = (l + r) // 2
      if s * potions[m] >= success:
        r = m - 1
      else:
        l = m + 1
    
    return len(potions) - l

  for s in spells:
    result. append(bs(s, 0, len(potions) - 1))

  return result

print(successfulPairs([5,1,3], [1, 2, 3, 4, 5, 6, 7], 21))







