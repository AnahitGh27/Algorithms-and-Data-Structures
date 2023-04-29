function merge(arr, first, mid, last) {
    let tmpArr = new Array(last - first + 1);
    let index = 0;
    let first1 = first;
    let last1 = mid;
    let first2 = mid + 1;
    let last2 = last;
    
    while ((first1 <= last1) && (first2 <= last2)) {
        if (arr[first1] <= arr[first2]) {
            tmpArr[index++] = arr[first1++];
        } else {
            tmpArr[index++] = arr[first2++];
        }
    }

    while (first1 <= last1) {
        tmpArr[index++] = arr[first1++];
    }

    while (first2 <= last2) {
        tmpArr[index++] = arr[first2++];
    }

    for (let i = first, j = 0; i <= last; ++j, ++i) {
        arr[i] = tmpArr[j]
    }
}

function mergeSort(arr, first, last) {
    if (first >= last) { return; }
    let mid = first + (last - first) / 2 | 0;
    mergeSort(arr, first, mid);
    mergeSort(arr, mid + 1, last);
    merge(arr, first, mid, last);
}




