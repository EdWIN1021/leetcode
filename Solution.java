class Solution {
    public class ListNode {
        int val;
        ListNode next;
        ListNode() {}
        ListNode(int val) { this.val = val; }
        ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    }

    public static void main(String[] args) {
        
    }

    public static ListNode rotateRight(ListNode head, int k) {
        if(head == null) return head;

        int length = 1;
        ListNode tail = head;

        while(tail.next != null){
            length ++;
            tail = tail.next;
        }


        k = k % length;
        if(k == 0) return head;

        ListNode cur = head;

        for(int i = 0; i < length - k - 1; i++){
            cur = cur.next;
        }

        ListNode newHead = cur.next;
        tail.next = head;
        cur.next = null;

        return newHead;
    }

}