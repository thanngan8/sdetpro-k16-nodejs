class Animal {
    constructor(name, maxSpeed) {
        this.name = name;
        this.maxSpeed = maxSpeed;
    }

    getSpeed() {
        return Math.floor(Math.random() * (this.maxSpeed + 1));
    }
}
// Create animal objects
const horse = new Animal("Horse", 75);
const tiger = new Animal("Tiger", 100);
const dog = new Animal("Dog", 60);
// Get speeds for each animal
const horseSpeed = horse.getSpeed();
const tigerSpeed = tiger.getSpeed();
const dogSpeed = dog.getSpeed();

// Find the winner
let winner;
let maxSpeed = Math.max(horseSpeed, tigerSpeed, dogSpeed);

if (maxSpeed === horseSpeed) {
    winner = horse.name;
} else if (maxSpeed === tigerSpeed) {
    winner = tiger.name;
} else {
    winner = dog.name;
}

// Print the result
console.log(`Winner is ${winner}, with speed: ${maxSpeed} km/h`);

// Optional: Print all speeds to see the race results
console.log(`Horse speed: ${horseSpeed} km/h`);
console.log(`Tiger speed: ${tigerSpeed} km/h`);
console.log(`Dog speed: ${dogSpeed} km/h`);