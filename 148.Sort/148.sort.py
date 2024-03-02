class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

head = ListNode(4)
head.next = ListNode(2)
head.next.next = ListNode(1)
head.next.next.next = ListNode(3)

def getMid(head):
  slow, fast = head, head.next 
  while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
  return slow


def merge(left, right):
  dummy = ListNode()
  curr = dummy

  while left and right:
    if left.val >= right.val:
      curr.next = right
      right = right.next
    else:
      curr.next = left
      left = left.next
    curr = curr.next

  if right:
     curr.next = right
  
  if left:
     curr.next = left

  return dummy.next


def sortList(head):
  if not head or not head.next:
     return head
  
  mid = getMid(head)
  left = head
  right = mid.next
  mid.next = None

  left  = sortList(left)
  right = sortList(right)

  return merge(left, right)

print(sortList(head))



