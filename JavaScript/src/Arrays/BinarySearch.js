function binary_search (a, key) {
    return recursiveBinarySearch(a, key, 0, a.length - 1);
};

function recursiveBinarySearch(arr, key, low, high) {
    if( low > high) {
        return -1;
    }

    let mid = Math.floor((low + high)/ 2);
    let midElement = arr[mid];

    if(key === midElement) {
        return mid;
    } else if (midElement > key) {
        return recursiveBinarySearch(arr, key, low, mid - 1);
    } 
    return recursiveBinarySearch(arr, key, mid + 1, high);
}

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
