/**
 * <18: Khong ban!
 * 18 -> 55: Unlimited!
 * 56 ->: 2 chai.
 * 
 */
const readline = require('readline-sync');
let clientAge = Number(readline.question('Your age: '));

if(clientAge < 18){
    console.log("Khong ban!");
} else if(clientAge <= 55){
    console.log("Unlimited");
} else {
    console.log("2 chai");
}
