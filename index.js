var deleteDuplicates = function (head) {
  if (!head) return null;
  const dummy = new ListNode();
  dummy.next = head;

  let pre = dummy;
  curr = head;

  while (curr) {
    while (curr.next && curr.val === curr.next.val) {
      curr = curr.next;
    }

    if (pre.next === curr) {
      pre = curr;
    } else {
      pre.next = curr.next;
    }

    curr = curr.next;
  }

  return dummy.next;
};
