# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


head = ListNode(1,ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))

def rotateRight(head, k):
  if not head:
     return head
 
  secondTail, size = head, 1

  while secondTail.next:
    secondTail = secondTail.next
    size+=1

  k = k % size

  if k == 0:
    return head

  firstTail = head

  for i in range(size - k -1):
    firstTail = firstTail.next
    i+=1     

  newHead = firstTail.next
  firstTail.next = None
  secondTail.next = head

  return newHead
  

  

  





rotateRight(head, 2)