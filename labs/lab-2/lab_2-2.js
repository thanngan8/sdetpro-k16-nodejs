const readline = require('readline-sync');
let number = Number(readline.question('Please enter a number: '));

if (isNaN(number)) {
    console.log('Invalid!!! Please enter a valid number.');
} else if (!Number.isInteger(number)) {
    console.log('Input is a decimal number. Please enter an integer.');
} else {
    let msg = number % 2 === 0 ? "even number" : "odd number";
    console.log(`${number} is an ${msg}.`);
}
