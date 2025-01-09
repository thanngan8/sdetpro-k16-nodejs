let intArr = [1, 2, 3, 4, 5];

let oddCount = 0;
let evenCount = 0;

for (let i = 0; i < intArr.length; i++) {
    if (intArr[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log(`Even numbers: ${evenCount}`);
console.log(`Odd numbers: ${oddCount}`);


