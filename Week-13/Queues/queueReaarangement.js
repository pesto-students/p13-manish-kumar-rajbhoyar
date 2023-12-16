// Queue Class

class Queue {
    constructor(){
        this.queue = [];
    }

    // Add the data into the queue
    enqueue(data) {
        this.queue.push(data);
    }

    // remove the data from the queue
    dequeue() {
        if(this.isEmpty()) {
            throw new Error('Queue is Empty')
        }

        return this.queue.shift();
    }

    // get the top of the queue
    peek() {
        if(this.isEmpty()) {
            throw new Error('Queue is Empty')
        }
        return this.queue[0];
    }

    // check if the queue is empty
    isEmpty() {
        return this.queue.length == 0;
    }

    // print the queue
    print() {
        console.log(this.queue);
    }

}

var queueReaarangement = function(arr) {
    let evenQueue = new Queue();
    let oddQueue = new Queue();

    // iterate through the array and add the element to even or add queue based on parity
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            evenQueue.enqueue(arr[i]);
        } else {
            oddQueue.enqueue(arr[i]);
        }
    }

    // append the odd queue to the end of even queue
    while(!oddQueue.isEmpty()) {
        let data = oddQueue.dequeue();
        evenQueue.enqueue(data);
    }
    return evenQueue;
}


const input = prompt('Enter input: ')
const array = input.split(' ');
const result = queueReaarangement(array);

console.log(result);