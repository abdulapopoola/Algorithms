function reverse_k_nodes (head, k) {
  if(!head || k <= 1) {
    return head;
  }
  
  let runner = head;
  let reversed = null;
  let counter = 0;
  let loopStart;
  while(runner) {
    let reversedK = null;
    loopStart = runner;
    do {
      let rest = runner.next;
      runner.next = reversedK;
      reversedK = runner;
      runner = rest;
      counter++;
    } while(counter % k && runner)
    
    if(!reversed) {
      reversed = reversedK;
    } 
      
    if(counter % k === 0){
      startNode.next = reversedK;
    } else {
      startNode.next = loopStart;
    }

    startNode = loopStart;
  }
  
  return reversed
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
reverse_k_nodes(ll, 3);
