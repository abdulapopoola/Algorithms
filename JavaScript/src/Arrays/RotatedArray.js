function binary_search_rotated(arr, key) {
    return bsr(arr, key, 0, arr.length - 1);
};

function bsr(arr, key, low, high) {
    if(low > high) {
        return -1;
    }

    let midIndex = Math.floor((low + high) / 2);
    let midValue = arr[midIndex];
    if(midValue == key) {
        return midIndex;
    }

    let startVal = arr[low];
    let endVal = arr[high];
    let searchLeft = true;

    if(midValue > endVal) {
        searchLeft = key < midValue && key >= startVal;
    } else {
        searchLeft = key < midValue || key > endVal;
    }

    if(searchLeft){
        return bsr(arr, key, low, midIndex - 1);
    }

    return bsr(arr, key, midIndex + 1, high);
}
