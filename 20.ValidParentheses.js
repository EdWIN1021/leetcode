var isValid = function (s) {
  if (s.length <= 1) {
    return false;
  }

  if (s.length % 2 !== 0) {
    return false;
  }

  const stack = [];
  const mapping = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(mapping.get(s[i]));
    } else {
      if (s[i] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return !stack.length > 0;
};

console.log(isValid("([}}])"));
