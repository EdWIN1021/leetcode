class Solution(object):
  def coinChange(coins, amount):
    dp = [amount + 1] * (amount + 1)
    dp[0] = 0

    for i in range(0, amount + 1):
      for j in coins:
        if i - j >=0:
          dp[i] = min(dp[i], 1 + dp[i - j]) 
          
    return dp[amount] if dp[amount] != amount + 1 else -1
  coinChange([1,2,5],11)

