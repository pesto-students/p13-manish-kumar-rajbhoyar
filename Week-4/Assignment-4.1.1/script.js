class Calculator {

    // Addition of two numbers
    add(number1, number2) {
        return number1 + number2;
    }

    // Subtraction of two numbers
    subtract(number1, number2) {
        return number1 - number2;
    }

    // Multiplication of two numbers
    multiply(number1, number2) {
        return number1 * number2;
    }

    // Division of two numbers
    divide(number1, number2) {
        return number1 / number2;
    }
}

class ScientificCalculator extends Calculator {

    // Square of a number
    square(number) {
        return Math.pow(number, 2);
    }

    // Cube of a number
    cube(number) {
        return Math.pow(number, 3);
    }

    // Number1 raised to the power of Number2
    power(number1, number2) {
        return Math.pow(number1, number2);
    }
}

// Instance of ScientificCalculator Class
const scientificCalculatorObject = new ScientificCalculator();

// Addition using call method
let add = scientificCalculatorObject.add.call(this, 10, 5);
console.log("10 + 5 = ", add);

// Subtraction using apply method
let subtract = scientificCalculatorObject.subtract.apply(this, [10, 5]);
console.log("10 - 5 = ", subtract);

// Multiplication using bind method
const multiplyByTwo = scientificCalculatorObject.multiply.bind(this, 2);
let multiply = multiplyByTwo(5);
console.log("5 * 2 = ", multiply);

// Cube using bind method
const powerOfThree = scientificCalculatorObject.cube.bind(this);
let cube = powerOfThree(2);
console.log("2 ^ 3 = ", cube);