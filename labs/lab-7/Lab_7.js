const readline = require('readline-sync');
const inputSentence = readline.question("Enter a sentence: ");

function countWords(sentence) {
    const words = sentence.split(/\s+/);
    const wordCount = {};

    words.forEach(function (word) {
        word = word.toLowerCase();
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    });
    return wordCount;
}

const result = countWords(inputSentence);
console.log("Số lần xuất hiện của từng từ:");
for (const word in result) {
    if (result.hasOwnProperty(word)) {
        console.log(`${word}: ${result[word]}`);
    }
}
