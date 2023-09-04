class Person {

    // Person class constructor initialising name, age, gender and nationality
    constructor(name, age, gender, nationality) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }

    // Introduce method to return name, age, gender and nationality
    introduce() {
        return `My name is ${this.name}, I am ${this.age} years old, I am ${this.gender}, and I am ${this.nationality}`;
    }
}

class Student extends Person {

    // Student class constructor calling the Person class constructor and also initialising subject property
    constructor(name, age, gender, nationality, subject) {
        super(name, age, gender, nationality);
        this.subject = subject;
    }

    // Study method to return name, age, gender, nationality and subject
    study() {
        return `My name is ${this.name}, I am ${this.age} years old, I am ${this.gender}, and I am ${this.nationality}. I am studying ${this.subject}`;
    }
}

// Person class instances
let person1 = new Person('John', 25, 'Male', 'American');
let person2 = new Person('Jane', 30, 'Female', 'Canadian');
let person3 = new Person('Bob', 20, 'Male', 'Australian');

console.log(person1.introduce());
console.log(person2.introduce());
console.log(person3.introduce());

// Student class instance
let student = new Student('Sarah', 18, 'Female', 'British', 'Computer Science');

console.log(student.introduce());
console.log(student.study());
