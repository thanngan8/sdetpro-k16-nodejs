// Process the given string
// Init an object {}
// Loop over the givenStringArray
//  if(initObj[word])

const readline = require('readline-sync');
const givenString = getSentenceFromUser();
let individualWords = givenString.replace(/,/gi, "").split(" ");
let groupWord = groupWordFromString(individualWords);
console.log(groupWord);

function getSentenceFromUser() {
    return readline("Enter a sentence");
}

function groupWordFromString(individualWords) {
    const returnedObj = {};
    for (const word of individualWords) {
        if (returnedObj[word])
            returnedObj[word] = returnedObj[word] + 1;
        else
            returned[word] = 1;
    }
    return returnedObj;
}