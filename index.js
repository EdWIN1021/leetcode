var partition = function (head, x) {
  let left = new ListNode();
  let right = new ListNode();

  let lt = left;
  let rt = right;

  while (head) {
    if (head.val < x) {
      lt.next = head;
      lt = lt.next;
    } else {
      rt.next = head;
      rt = rt.next;
    }
    head = head.next;
  }

  lt.next = right.next;
  rt.next = null;

  return left.next;
};
