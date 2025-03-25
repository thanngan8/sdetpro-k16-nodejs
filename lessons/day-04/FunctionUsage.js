// const UtilMethods = require('./UtilMethods.js');

// Destructure
const {isEvenNumber, isOddNumber} = require('./UtilMethods.js');

// Get an user input then check if it is even or off number
let userInput = getUserInput();
let isOddNumber = isOddNumber(userInput);

if(isOddNumber) {
console.log(`The number ${userInput} is an even number`);
} else {
    console.log(`The number ${userInput} is an odd number`);
}

//function getUserInput();
//console.log();