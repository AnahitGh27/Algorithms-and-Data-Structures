function partition(arr, first, last) {
    let pivot = arr[last];
    let i = first - 1;
    for (let j = first; j < last; ++j) {
        if (arr[j] <= pivot) {
            ++i;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[last]] = [arr[last], arr[i + 1]];

    return i + 1;
}

function quickSort(arr, first, last) {
    if (first >= last) { return; }
    let pivotIndex = partition(arr, first, last)
    quickSort(arr, first, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, last);
}