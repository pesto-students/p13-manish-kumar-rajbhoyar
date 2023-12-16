// Stack Class

class Stack {
    constructor(){
        this.stack = [];
    }

    // Push data into the stack
    push(data) {
        this.stack.push(data);
    }

    // Pop the data out of the stack
    pop() {
        if(this.isEmpty()) {
            throw new Error('Stack is Empty')
        }

        return this.stack.pop();
    }

    // get the top of the stack
    peek() {
        if(this.isEmpty()) {
            throw new Error('Stack is Empty')
        }
        return this.stack[this.stack.length - 1]
    }

    // check if the stack is empty
    isEmpty() {
        return this.stack.length == 0;
    }

    // print the stack
    print() {
        console.log(this.stack);
    }

}

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


// reverse the queue
var reverseKElements = function(inputQueue, k) {

    let stack = new Stack();
    let queue = new Queue();

    // Push first k elements to the stack
    while(k != 0) {
        let data = inputQueue.dequeue();
        stack.push(data);
        k--;
    }

    // pop the entire stack and push it in the queue so the first k elements will be reversed
    while(!stack.isEmpty()) {
        let data = stack.pop();
        queue.enqueue(data);
    }

    // Add the remaining elements from the input queue to the result queue
    while(!inputQueue.isEmpty()) {
        let data = inputQueue.dequeue();
        queue.enqueue(data);
    }

    return queue;
}

const input = prompt('Enter input: ')
const array = input.split(' ');
const k = array[array.length-1];
let inputQueue = new Queue();
for(let i = 0; i < array.length-1; i++) {
    inputQueue.enqueue(array[i]);
}
const result = reverseKElements(inputQueue, k);

console.log(result);

