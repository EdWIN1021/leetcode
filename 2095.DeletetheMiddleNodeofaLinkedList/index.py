class ListNode:
  def __init__(self, val = 0, next=None):
    self.val = val
    self.next = next

head = ListNode(1, next=ListNode(3, next=ListNode(4, next=ListNode(7, next=ListNode(1, next=ListNode(2, next=ListNode(6)))))))


# --- use slow and fast to find the middle node

def deleteMiddle(head):
  s, f = head, head

  while f and f.next:
    s = s.next
    f = f.next.next


  curr = head
  while curr != None:
    if curr.next == s:
      curr.next = s.next
      break
    curr = curr.next

  return head if head.next else None


deleteMiddle(head)



