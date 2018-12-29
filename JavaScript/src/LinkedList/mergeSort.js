var merge_sorted = function(head1, head2) {
    // if both lists are empty then merged list is also empty
    // if one of the lists is empty then other is the merged list
    if (!head1) {
        return head2;
    } else if (!head2) {
        return head1;
    }

    let mergedHead = null;
    if (head1.data <= head2.data) {
        mergedHead = head1;
        head1 = head1.next;
    } else {
        mergedHead = head2;
        head2 = head2.next;
    }

    let mergedTail = mergedHead;

    while (head1 && head2) {
        let temp = null;
        if (head1.data <= head2.data) {
            temp = head1;
            head1 = head1.next;
        } else {
            temp = head2;
            head2 = head2.next;
        }

        mergedTail.next = temp;
        mergedTail = temp;
    }

    if (head1) {
        mergedTail.next = head1;
    } else if (head2) {
        mergedTail.next = head2;
    }

    return mergedHead;
};

function length(head) {
    let len = 0;
    while(head) {
        head = head.next;
        len++;
    }

    return len;
}

var merge_sort = function(head) {
  if(!head || !head.next) {
    return head;
  }
  
  let len = length(head);
  let mid = Math.floor(len / 2);
  let runner = head;
  while(mid > 1) {
    runner = runner.next;
    mid--;
  }
  
  let rightHalf = runner.next;
  runner.next = null;
  
  let sortedLeft = merge_sort(head);
  let sortedRight = merge_sort(rightHalf);
  head = merge_sorted(sortedLeft, sortedRight);
  
  return head;
};

function createLinkedList(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--) {
        list = {
            data: array[i],
            next: list
        };
    }
    return list;
}

var ll = createLinkedList([5,1,2,34,2,5,1,3,2,6,0]);
merge_sort(ll);
