// Type: Function Declaration
function add(a, b) {
return a + b;
}

//Type Function Expression
const add_ = function (a, b) {
return a + b;
}

// Type: Arrow Function
const arrowAddNumber = (a, b) => console.log(a + b);

// Object literal
const person = {
    name: 'John',
    age: 30,
    sayHello: function () {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} year old.`);
        }, 2* 1000);
    }
}
person.sayHello();

const array = [1, 2, 3, 4, 5];
// const addNums = 