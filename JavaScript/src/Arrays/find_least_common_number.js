function iterativeBinarySearch(a, key ){
    let low = 0;
    let high = a.length - 1;
    let res = -1;

    while (low <= high) {
        let mid = Math.floor((low + high)/ 2);
        let midElement = a[mid];

        if(key === midElement) {
            res = mid;
            break;
        } else if (midElement > key) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return res;
}

function find_least_common_number(a, b, c) {
  let aLen = a.length; 
  let bLen = b.length;
  let cLen = c.length;

  let smallestArray = a;
  let smallestArrayLen = aLen;
  let arraysToSearch = [b, c];
  if(cLen < aLen && cLen < bLen) {
      smallestArray = c;
      smallestArrayLen = cLen;
      arraysToSearch = [a,b];
  } else if (bLen < aLen && bLen < cLen) {
      smallestArray = b;
      smallestArrayLen = bLen;
      arraysToSearch = [a, c];
  }

  for(let i = 0; i < smallestArrayLen; i++){
    let val = smallestArray[i];
    if(iterativeBinarySearch(arraysToSearch[0], val) !== -1 && 
        iterativeBinarySearch(arraysToSearch[1], val) !== -1) {
            return val;
        }
  }

  return -1;
};
