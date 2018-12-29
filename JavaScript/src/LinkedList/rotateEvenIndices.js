function mergeAlternating(head1, head2) {
  let merged = head1;
  
  let runner = merged;
  head1 = head1.next;
  let moveHead1 = false
  while(head1 && head2) {
    if(moveHead1) {
      runner.next = head1;
      head1 = head1.next;
    } else {
      runner.next = head2;
      head2 = head2.next;    
    }
    runner = runner.next;
    moveHead1 = !moveHead1;
  }
  
  if(head1) {
    runner.next = head1;
  } else if (head2) {
    runner.next = head2;
  }
  
  return merged;
}

function reverse_even_nodes(head) {
  let evenNodes = null;
  
  let runner = head;
  let isEven = false;
  while(runner && runner.next) {
    let evenNode = runner.next;
    let nextOddNode = evenNode.next;
    runner.next = nextOddNode;

    evenNode.next = evenNodes;
    evenNodes = evenNode;

    runner = nextOddNode;
  }
  
  return mergeAlternating(head, evenNodes);  
};

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
var ll2 = createLinkedList([2,4,6]);
reverse_even_nodes(ll);
