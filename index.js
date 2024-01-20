var reverseBetween = function (head, left, right) {
  const arr = [];
  let curr = head;
  let counter = 1;

  while (curr) {
    if (counter >= left && counter <= right) {
      arr.unshift(curr.val);
    }
    counter++;
    curr = curr.next;
  }

  curr = head;
  counter = 1;

  while (curr) {
    if (counter >= left && counter <= right) {
      curr.val = arr.shift();
    }
    counter++;
    curr = curr.next;
  }
  return head;
};
