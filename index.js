var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const mapT = new Map();
  const mapS = new Map();

  for (let i = 0; i < s.length; i++) {
    console.log(i);
    if (!mapT.get(s[i])) {
      mapT.set(s[i], t[i]);
    }

    if (!mapS.get(t[i])) {
      mapS.set(t[i], s[i]);
    }

    if (
      (mapT.get(s[i]) && mapT.get(s[i]) !== t[i]) ||
      (mapS.get(t[i]) && mapS.get(t[i]) !== s[i])
    ) {
      return false;
    }
  }

  return true;
};

console.log(isIsomorphic("eea", "add"));
