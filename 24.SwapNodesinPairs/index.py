class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


head =  ListNode(1, ListNode(2, ListNode(3, ListNode(4))))

def swapPairs(head):
    dummy = ListNode(0, head)
    pre, curr = dummy, dummy.next

    while curr and curr.next:
      first = curr
      second = curr.next

      first.next = second.next
      second.next = first
      pre.next = second

      pre = first
      curr = first.next

    return dummy.next


  


swapPairs(head)




