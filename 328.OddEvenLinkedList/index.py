class ListNode:
  def __init__(self, val=0, next=None):
    self.val = val
    self.next = next

head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))

def oddEvenList(head):
  if not head: 
    return None
       
  odd = head
  evenHead = even = head.next
       
  while even and even.next:
    odd.next = odd.next.next
    odd = odd.next
           
    even.next = even.next.next
    even = even.next
       
  odd.next = evenHead
  return head
        
oddEvenList(head)