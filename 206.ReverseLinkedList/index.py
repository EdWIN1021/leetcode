class ListNode:
  def __init__(self, val=0, next=None):
    self.val = val
    self.next = next

head = ListNode(1,ListNode(2,ListNode(3, ListNode(4, ListNode(5)))))

def reverseList(head):
  node = None
  curr = head

  while curr:
    newNode = ListNode(curr.val)

    temp = node
    node = newNode
    newNode.next = temp

    curr = curr.next

  return node


reverseList(head)

