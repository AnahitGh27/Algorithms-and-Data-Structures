function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let j = 0; j < arr.length - 1; ++j) {
            if (arr[j] > arr[j + 1]) { 
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }   
        } 
    } while (swapped)
}
