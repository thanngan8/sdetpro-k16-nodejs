let arr = [1,2,3,4,5];

// Map
// let returnedValues = arr.map(myRule);
// console.log(returnedValues);
// console.log(arr);

// function myRule(value, index, arr) {
//     return value * 2;
// }

// forEach
let userList = [];
arr.forEach(addAutomationUsername);

function addAutomationUsername(value, index, arr) {
    userList.push(`AutomationUser_${value}`);
}
console.log(userList);