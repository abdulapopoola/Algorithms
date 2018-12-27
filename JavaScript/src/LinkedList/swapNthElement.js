function swap_nth_node(head, n) {
  if(!head || n === 1) {
    return head;
  }
  
  n--; //target nth-1 node
  let runner = head;
  while(n > 1 && runner) {
    runner = runner.next;
    n--;
  }

  if(n > 1) {
    return null;
  }
  
  let restOfHead = head.next;
  let restOfIndex = runner.next;
  head.next = restOfIndex.next;
  runner.next = head;
  restOfIndex.next = restOfHead;
  head = restOfIndex;  
  
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

var ll = createLinkedList([7,4,2,5,1,9]);
swap_nth_node(ll, 99);
