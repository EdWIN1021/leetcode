class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

head = ListNode(5, ListNode(4, ListNode(2, ListNode(1))))

def pairSum(head):
    slow, fast = head, head
    prev = None 

    while fast and fast.next:
      fast = fast.next.next
      tmp = slow.next
      slow.next = prev
      prev = slow
      slow = tmp

    res = 0

    while slow:
        res = max(res, prev.val + slow.val)
        prev = prev.next
        slow = slow.next
    
    return res

print(pairSum(head))
        