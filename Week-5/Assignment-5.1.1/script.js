// Generator function with each string converted to symbol
function* myGenerator(arr) {
    for (let i = 0; i < arr.length; i++) {
        yield Symbol(arr[i]);
    }
}

const arr = ['hello', 'world', 'test'];

// Iterator created using generator function
const iterator = myGenerator(arr);

// Looping over the iterator
for (element of iterator) {
    console.log(element);
}