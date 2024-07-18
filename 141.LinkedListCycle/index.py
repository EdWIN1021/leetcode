# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def hasCycle(head):
    if not head:
      return False

    s = set()
    curr = head

    while curr:
      if curr in s:
        return True
      
      s.add(curr)
      curr = curr.next
        
    return False




    

              
    
        







