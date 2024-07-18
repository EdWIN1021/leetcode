# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


head = ListNode(1, ListNode(4, ListNode(3, ListNode(2, ListNode(5, ListNode(2))))))


def partition(head, x): 
  less_head = ListNode()
  greater_head = ListNode()

  less = less_head
  greater = greater_head


  while head:
    if head.val < x:
      less.next = head
      less = less.next

    else:
      greater.next = head
      greater = greater.next
    head = head.next

  less.next = greater_head.next
  greater.next = None

  return less_head.next

  
        
          







   






partition(head, 3)