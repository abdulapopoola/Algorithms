function rotate_list(head, n) {
  if(!head || !n) {
    return head;
  }
  
  let len = length(head);  
  let rotation = rotationCount(len, n);
  if(!rotationCount) {
      return head;
  }

  let fast = head;
  let slow = head;  
  while(rotation) {
    fast = fast.next;
    rotation--;
  }
  
  while(fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  
  let endOfList = slow.next;
  slow.next = null;
  fast.next = head;
  head = endOfList;
  
  return head;
};

function length(head) {
    let len = 0;
    while(head) {
        head = head.next;
        len++;
    }

    return len;
}

function rotationCount(len, n) {
    let rotations = n % len;
    if(n < 0) {
        rotations += len;
    }

    return rotations;
}

function createLinkedList(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--) {
        list = {
            value: array[i],
            next: list
        };
    }
    return list;
}

var ll = createLinkedList([1,2,3,4,5]);
rotate_list(ll, 17);
