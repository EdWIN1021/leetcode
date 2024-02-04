const combine = function (n, k) {
  const res = [];

  const backtrack = (start, combo) => {
    if (combo.length === k) {
      return res.push([...combo]);
    }

    for (let i = start; i <= n; i++) {
      combo.push(i);
      backtrack(i + 1, combo);
      combo.pop();
    }
  };

  backtrack(1, []);

  return res;
};

console.log(combine(4, 2));
