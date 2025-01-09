let intArr = [12, 34, 1, 16, 28];

function sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        // Find index of the minimum element in the unsorted array
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the minimum element with the element at current index
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}
sort(intArr);
console.log(`Sorted array: ${intArr}`);