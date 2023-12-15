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
var reverseQueue = function(arr) {

    let stack = new Stack();
    let queue = new Queue();

    // Add the array elements to the queue
    for(let i = 0; i < arr.length; i++) {
        queue.enqueue(arr[i]);
    }

    // remove the elements from the queue and add it to the stack
    while(!queue.isEmpty()) {
        let element = queue.dequeue();
        stack.push(element);
    }

    // remove the elements from the stack and add it to the queue
    while(!stack.isEmpty()) {
        let element = stack.pop();
        queue.enqueue(element);
    }

    return queue;
}

const input = prompt('Enter input: ')
const array = input.split(' ');
const result = reverseQueue(array);

console.log(result);

