function binarySearchRec(arr, start, end, target) {
    if (start > end) { return -1; }
    let mid = start + ((end - start) / 2 | 0);
    if (arr[mid] === target) { return mid; }
    if (arr[mid] > target) { return binarySearchRec(arr, start, mid - 1, target); }
    else { return binarySearchRec(arr, mid + 1, end, target) };
}
