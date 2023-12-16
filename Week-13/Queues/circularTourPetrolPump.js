// How to solve this using queues/stacks

var circularTourPetrolPump = function(length, petrolPump, distance) {
    let start = 0;
    let extraPetrol = requiredPetrol = 0;

    for(let i = 0; i < length; i++) {
        // to get the distance extraPetrol at each petrol pump
        extraPetrol += petrolPump[i] - distance[i];

        // if extra petrol is less than zero means the starting point can't be the pump till now, so initialize it to i + 1
        if(extraPetrol < 0) {
            start = i + 1;
            requiredPetrol += extraPetrol;
            extraPetrol = 0;
        }
    }

    // to check the starting elements, if the required petrol is less than the extra petrol saved then we get the starting point
    if(requiredPetrol + extraPetrol >= 0) {
        return start+1;
    }
    return -1;
}

const input = prompt('Enter input: ')
const array = input.split(' ');
const length = array.shift();
const petrolPump = [];
const distance = [];

for(let i = 0, k = 0; i < array.length-1; i = i + 2) {
    petrolPump[k] = array[i];
    distance[k] = array[i+1];
    k++;
}
const result = circularTourPetrolPump(length, petrolPump, distance);

console.log(result);