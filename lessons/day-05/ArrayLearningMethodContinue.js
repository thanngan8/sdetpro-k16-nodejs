let myArray = [1, 7, 3, 4];

// DELETE | splice
let startIndex = 2;
let deleteCount = 1;
let insertValue = 10;
let returnedValue = myArray.splice(startIndex, deleteCount, insertValue);
console.log(returnedValue);
console.log(myArray);

for (let i = 0; i < myArray.length; i++) {
    // if (myArray[i] % 2 !== 0) {
    //     myArray.splice(i, 1);
    // }

    if(isOddNumber(myArray[i])) {
        i--;
        removeElementFromArray(myArray, i);
    }
console.log(myArray);

function isOddNumber(number) {
    return number % 2 !== 0;
}

function removeElementFromArray(array, startIndex) {
const defaultDeleteCount = 1;
array.splice(startIndex, defaultDeleteCount);
return array;
}
}