function insertion_sort(head){
  if(!head || !head.next) {
    return head;
  }
  
  let sorted = null;
  
  while(head) {
    let val = head;
    head = head.next;
  
    if(!sorted || val.data < sorted.data) {
      val.next = sorted;
      sorted = val;
    } else {
      let prev = sorted;
      let current = sorted.next;

      while(val.data > prev.data && current.next) {
        prev = current;
        current = current.next;
      }

      if(val.data > current.data) {
        current.next = val;
        val.next = null;
      } else {
        prev.next = val;
        val.next = current;        
      }
    }          
  }
  
  return sorted;
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
insertion_sort(ll);
