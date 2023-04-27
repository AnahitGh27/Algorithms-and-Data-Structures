function maxElemArrRec(arr, n) {
    if (n === 1) { return arr[0]; }
    return Math.max(arr[n - 1], maxElemArrRec(arr, n - 1));
}