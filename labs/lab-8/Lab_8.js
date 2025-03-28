class Animal {
    constructor(name, maxSpeed) {
        this.name = name;
        this.maxSpeed = maxSpeed;
    }

    getSpeed() {
        return Math.floor(Math.random() * (this.maxSpeed + 1));
    }
}

const horse = new Animal("Horse", 75);
const tiger = new Animal("Tiger", 100);
const dog = new Animal("Dog", 60);

const horseSpeed = horse.getSpeed();
const tigerSpeed = tiger.getSpeed();
const dogSpeed = dog.getSpeed();

let winner;
let maxSpeed = Math.max(horseSpeed, tigerSpeed, dogSpeed);

if (maxSpeed === horseSpeed) {
    winner = horse.name;
} else if (maxSpeed === tigerSpeed) {
    winner = tiger.name;
} else {
    winner = dog.name;
}

console.log(`Winner is ${winner}, with speed: ${maxSpeed} km/h`);
