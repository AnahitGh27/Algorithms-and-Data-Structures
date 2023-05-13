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

function kSmall(k, arr, first, last) {
    if (first === last) { return arr[first]; }
    let pivotIndex = partition(arr, first, last);
    let pivot = arr[pivotIndex];

    if (k < pivotIndex - first + 1) {
        return kSmall(k, arr, first, pivotIndex - 1)
    } else if (k === pivotIndex - first + 1) {
        return pivot;
    } else {
        return kSmall(k - (pivotIndex - first + 1), arr, pivotIndex + 1, last);
    }
}