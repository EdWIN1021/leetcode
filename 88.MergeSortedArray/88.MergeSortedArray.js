var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (k > 0) {
    if (nums1[i] < nums2[j]) {
      nums1[k] = nums2.pop();
      j--;
    } else {
      nums1[k] = nums1[i];
      i--;
    }
    k--;
  }

  for (let i = 0; i < nums2.length; i++) {
    nums1[i] = nums2[i];
  }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
