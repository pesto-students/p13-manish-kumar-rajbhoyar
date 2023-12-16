// Section 1 - Inheritance

class Vehicle {

    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive() {
        return `Driving ${this.make} ${this.model}.`;
    }
}

class Car extends Vehicle {

    constructor(make, model, year, color, numSeats) {
        super(make, model, year, color);
        this.numSeats = numSeats;
    }
}

class RideShareCar extends Car {

    constructor(make, model, year, color, numSeats, isAvailable) {
        super(make, model, year, color, numSeats);
        this.isAvailable = isAvailable;
    }
}


// Section 2 - Polymorphism

class Shape {

    calculateArea() {
        return "Unknown area";
    }
}

class Rectangle extends Shape {

    calculateArea(width, height) {
        return width * height;
    }
}

class Triangle extends Shape {

    calculateArea(base, height) {
        return (base * height) / 2;
    }
}

class Circle extends Shape {

    calculateArea(radius) {
        return Math.PI * radius * radius;
    }
}

let rectangle = new Rectangle();
let triangle = new Triangle();
let circle = new Circle();

console.log(rectangle.calculateArea(10, 5));
console.log(triangle.calculateArea(10, 5));
console.log(circle.calculateArea(5));


// Section 3 – Abstraction and encpasulation

class BankAccount {
    #accountNumber;
    #balance;
    #accountHolderName;

    constructor(accountNumber, balance, accountHolderName) {
        this.#accountNumber = accountNumber;
        this.#balance = balance;
        this.#accountHolderName = accountHolderName;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(amount) {
        this.#balance = amount;
    }


}

class CheckingAccount extends BankAccount {

    getBalance() {
        return super.getBalance();
    }

    deposit(amount) {
        let balance = this.getBalance() + amount;
        super.setBalance(balance);
    }

    withdraw(amount) {
        let balance = this.getBalance() - amount;
        super.setBalance(balance);
    }
}

class SavingsAccount extends BankAccount {

    getBalance() {
        return super.getBalance();
    }

    deposit(amount) {
        let balance = this.getBalance() + amount;
        super.setBalance(balance);
    }

    withdraw(amount) {
        let balance = this.getBalance() - amount;
        if (balance > 0) {
            super.setBalance(balance);
        } else {
            console.log("Transaction reverted as the Withdrawal amount is greater than the balance.")
        }
    }
}

let checkingAccountObject = new CheckingAccount('12345', 0, 'John');
let savingsAccountObject = new SavingsAccount('67890', 0, 'Jane');

checkingAccountObject.deposit(5000);
checkingAccountObject.withdraw(2000);
console.log("Balance of CheckingAccount: ", checkingAccountObject.getBalance());

savingsAccountObject.deposit(4000);
savingsAccountObject.withdraw(2000);
console.log("Balance of SavingsAccount: ", savingsAccountObject.getBalance());

savingsAccountObject.deposit(8000);
savingsAccountObject.withdraw(11000);
console.log("Balance of SavingsAccount: ", savingsAccountObject.getBalance());