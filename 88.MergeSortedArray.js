const merge = (nums1, m, nums2, n) => {
  if (n === 0) {
    return;
  }

  if (m === 0) {
    for (i = 0; i < nums1.length; i++) {
      nums1[i] = nums2[i];
    }
    return;
  }

  nums1.splice(m, n);

  for (i = 0; i < nums2.length; i++) {
    for (j = 0; j < nums1.length; j++) {
      if (nums2[i] === nums1[j] || nums2[i] < nums1[j]) {
        nums1.splice(j, 0, nums2[i]);
        break;
      }

      if (nums2[i] > nums1[j] && nums2[i] < nums1[j + 1]) {
        nums1.splice(j + 1, 0, nums2[i]);
        break;
      }

      if (nums2[i] > nums1[j] && j === nums1.length - 1) {
        nums1.push(nums2[i]);
        break;
      }
    }
  }
};

var nums1 = [1, 2, 7, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

merge(nums1, m, nums2, n);

console.log(nums1);
