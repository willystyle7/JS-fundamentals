let insertionSort = arr => {
    let length = arr.length;
    for (let i = 1; i < length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = current;
    }
    return arr;
};

let arr = [3, 7, 9, 11, -1, 0];
console.log(insertionSort(arr));
