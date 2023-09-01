function counter() {
    let count = 0;

    // Increment function that increments the value of count variable each time it is called
    function increment() {
        count++;
        return count;
    }

    // Return the inner function increment
    return increment;
}

// Creating two instances of counter function
const firstCounter = counter();
const secondCounter = counter();

const firstValues = [];
const secondValues = [];

// Calling the firstCounter 5 times
for (let i = 0; i < 5; i++) {
    let counterValue = firstCounter();
    firstValues[i] = counterValue;
}

// Calling the secondCounter 3 times
for (let i = 0; i < 3; i++) {
    let counterValue = secondCounter();
    secondValues[i] = counterValue;
}

console.log(firstValues);
console.log(secondValues);