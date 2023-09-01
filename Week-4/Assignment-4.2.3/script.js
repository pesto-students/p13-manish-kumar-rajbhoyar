// Protecting the Object

const person = {
    getAge() {
        return this.age;
    },

    setAge(age) {
        this.age = age;
    }
};

Object.defineProperties(person, {
    name: {
        value: 'John',
        writable: false,
    },
    email: {
        value: 'John@gmail.com',
        writable: false,
    },
    age: {
        value: 20,
        writable: true,
    },
});

// Since the age property is writeable, the value will be set to 22
console.log("Age Before: ", person.getAge());
person.setAge(22);
console.log("Age After: ", person.getAge());

// This assignment will have no effect
console.log("Name Before: ", person.name);
person.name = 'Jane';
console.log("Name After: ", person.name);

// This assignment will have no effect
console.log("Email Before: ", person.email);
person.email = 'Jane@gmail.com';
console.log("Email After: ", person.email);


// JavaScript Prototype

const Vehicle = {
    make: 'Eagle',
    model: 'Talon TSi',
    year: 1993
};

Vehicle.prototype.getDetails = function () {
    return `Make:  ${this.make}, Model: ${this.model}, Year: ${this.year}`;
};

const Car = Object.create(Vehicle);
Car.numDoors = 4;
Car.getDetails = function () {
    return `Make:  ${this.make}, Model: ${this.model}, Year: ${this.year}, Number of Doors: ${this.numDoors}`;
}

console.log(Vehicle.getDetails());
console.log(Car.getDetails());