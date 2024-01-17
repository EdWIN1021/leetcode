var evalRPN = function (tokens) {
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (isNaN(Number(tokens[i]))) {
      let num1 = Number(stack.pop());
      let num2 = Number(stack.pop());

      if (tokens[i] === "+") {
        stack.push(num1 + num2);
      }

      if (tokens[i] === "-") {
        stack.push(num2 - num1);
      }

      if (tokens[i] === "*") {
        stack.push(num1 * num2);
      }

      if (tokens[i] === "/") {
        stack.push(Math.trunc(num2 / num1));
      }
    } else {
      stack.push(tokens[i]);
    }
  }
  return stack[0];
};

console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
