def generateParenthesis(n):

  res = []
  stack = []

  def backtrack(open, close):
    if open == n and close == n:
      res.append("".join(stack))
      return
    
    if open < n:
      stack.append("(")
      backtrack(open + 1, close)
      stack.pop()

    if close < open:
      stack.append(")")
      backtrack(open, close + 1)
      stack.pop()

  backtrack(0,0)

  return res

print(generateParenthesis(3))