const readline = require('readline-sync');
let height = Number(readline.question('Your height: '));
let weight = Number(readline.question('Your weight: '));

// Validate valid input
if(isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
console.log("Please enter valid positive numbers.");s
} else {
    let bmiCategory;
    let bmi = weight / (height * height);
    if(bmi < 18.5) {
        bmiCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) { 
        bmiCategory = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        bmiCategory = "Overweight";
    } else {
        bmiCategory = "Obesity";
    }

    console.log("Your BMI is: " + bmi.toFixed(1));
    console.log("BMI category: " + bmiCategory);
}