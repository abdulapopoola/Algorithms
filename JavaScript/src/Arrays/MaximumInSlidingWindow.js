function find_max_sliding_window2(arr, window_size) {
  // prepare first n elements
  let results = [];
  let dequeue = [];

  for(let i = 0; i < arr.length; i++) {
    if(!!dequeue.length && dequeue[0] === i - window_size) {
      dequeue.shift();
    }

    while(!!dequeue.length && arr[i] > arr[dequeue[dequeue.length - 1]]) {
      dequeue.pop();
    }

    dequeue.push(i);
    if(i >= window_size - 1){
      results.push(arr[dequeue[0]]);
    }
  }


  return results;
};
