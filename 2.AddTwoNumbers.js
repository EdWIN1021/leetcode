/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let result = new ListNode(-1)
    let dummy = result
  
    while(l1 || l2){
      let l2Val = l2?.val || 0
      let l1Val = l1?.val || 0
  
  
      let sum = l1Val + l2Val + carry;
  
      if (sum >= 10) {
          result.next = new ListNode(sum%10)
          result = result.next
          carry = 1;
  
        } else {
          result.next = new ListNode(sum)
          result = result.next
          carry = 0;
        }
     
        l1 = l1?.next;
        l2 = l2?.next;
      }
  
      if(carry>0) {
        result.next = new ListNode(1)
        result = result.next
      }
  
      return dummy.next
  };
  
