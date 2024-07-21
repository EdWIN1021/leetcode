class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

head = ListNode(1, ListNode(1, ListNode(2, ListNode(2))))

def deleteDuplicates(head):
    m = dict()

    dummy = ListNode(0, head)
    pre = dummy
    cur = head

    while cur:
      if cur.val not in m:
         m[cur.val] = 1
          
      else:
        m[cur.val] += 1

      if cur.next == None or cur.val != cur.next.val  :
        if m[cur.val] > 1:
          pre.next = cur.next

        else:
            pre = cur

      cur = cur.next

    return dummy.next

deleteDuplicates(head)



