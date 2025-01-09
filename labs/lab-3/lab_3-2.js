let intArr = [2, 1, 5, 4, 3];

let minValue = intArr[0];
let maxValue = intArr[0];

for (let i = 1; intArr.length; i++) {
    if (intArr[i] < minValue) {
        minValue = intArr[i];
    }
    if (intArr[i] > maxValue) {
        maxValue = intArr[i];
    }
}

console.log(`Minimum: ${minValue}`);
console.log(`Maximum: ${maxValue}`);

