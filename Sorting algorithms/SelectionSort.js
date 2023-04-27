function selectionSort(arr, n) {
    let min_idx = 0;
    for (let i = 0; i < n - 1; ++i) {
        min_idx =  i;
        for (let j = i + 1; j < n; ++j) {
            if (arr[j] < arr[min_idx]) { min_idx = j; }
        }
        if (min_idx !== i) {
            [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
        }
    }
}
