const readline = require('readline-sync');
const givenString = getSentenceFromUser();
let individualWords = givenString.replace(/,/g, "").split(" ");
let wordCounts = countWords(individualWords);
console.log(wordCounts);

// Function to get a sentence from the user
function getSentenceFromUser() {
    return readline.question("Enter a sentence: ");
}

// Function to count words
function countWords(individualWords) {
    const wordCountObj = {};
    for (const word of individualWords) {
        const lowerCaseWord = word.toLowerCase();
        if (wordCountObj[lowerCaseWord]) {
            wordCountObj[lowerCaseWord] += 1;
        } else {
            wordCountObj[lowerCaseWord] = 1;
        }
    }
    return wordCountObj;
}

