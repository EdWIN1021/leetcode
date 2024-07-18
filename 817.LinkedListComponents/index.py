# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


head = ListNode(0, ListNode(1, ListNode(2, ListNode(3))))

def numComponents(head, nums):
    Gset = set(nums)

    current = head
    count = 0
    while current:
        if current.val in Gset and (current.next is None or current.next.val not in Gset):
            count += 1
        current = current.next
    return count


print(numComponents(head, [0,1,3]))
