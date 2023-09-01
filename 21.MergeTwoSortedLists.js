var mergeTwoLists = function(list1, list2) {
    if(list1 === null){
        return list2
    }

    if(list2 === null){
        return list1
    }  

    let curr1 = list1;
    let dummy = new ListNode(-100);
    dummy.next = list2;
    let head = dummy;
    let curr2 = head;


    while(curr1){
        while(curr2){
            if(curr1.val >= curr2.val && curr2.next === null){
                let newNode = new ListNode(curr1.val)
                curr2.next = newNode
                break
            }
            if(curr1.val >=curr2.val && curr1.val<curr2.next.val){
                let newNode = new ListNode(curr1.val)
                let temp = curr2.next 
                curr2.next = newNode;
                newNode.next = temp;
                curr2 = head;
                break;
            }
            curr2 = curr2.next
        }
        curr1 = curr1.next;
    }
    return head.next
};