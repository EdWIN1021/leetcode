var removeNthFromEnd = function (head, n) {
  let size = 1;
  let curr = head;
  while (curr.next) {
    curr = curr.next;
    size++;
  }

  if (size === 1) {
    return null;
  }

  let dummy = new ListNode();
  dummy.next = head;
  let pre = dummy;

  let current = head;
  let index = 0;
  while (head) {
    if (size - n === 0) {
      return current.next;
    }

    if (index === size - n) {
      pre.next = current.next;
      current = null;
      break;
    }
    pre = pre.next;
    current = current.next;
    index++;
  }

  return head;
};
