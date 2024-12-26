const readline = require('readline-sync');
let arriavalTime = readline.question('Arrival Time: ');
let isHeOntime = (Number(arriavalTime) === 7);

if(isHeOntime) {
    console.log("Let's talk");
} else {
    console.log("Write a letter...");
}

if(!isHeOntime) {
    console.log("Write a letter...");
} else {
    console.log("Let's talk");
}

// Ternary Operator: Toán tử 3 ngôi
let msg = isHeOntime ? "Let's talk" : "Write a letter...";
console.log(msg);
