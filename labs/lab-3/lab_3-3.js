let intArr = [12, 34, 1, 16, 28];

function sort(arr) {
    for (let i = 0; i < intArr.length - 1; i++) {
        let minIndex = i;

        // Find index of the minimum element in the unsorted array
        for (let j = i + 1; j < intArr.length; j++) {
            if (intArr[j] < intArr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the minimum element with the element at current index
        let temp = intArr[i];
        intArr[i] = intArr[minIndex];
        intArr[minIndex] = temp;
    }
}
sort(intArr);
console.log(`Sorted array: ${intArr}`);