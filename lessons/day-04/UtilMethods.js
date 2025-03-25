// Support function
// Service function - Untility Functions

// 3: argument
let isEvenNumber_ = isEvenNumber('3');
console.log(`Is 3 even number : ${isEvenNumber_}`);

//number: parameter
function isEvenNumber(number) {
console.log(number);
return number % 2 === 0;
}

//number: parameter
const isOddNumber = function(number) {
    console.log(number);
    return number % 2 !== 0;
    }

// Common JS Module
module.exports = {isEvenNumber, isOddNumber};
