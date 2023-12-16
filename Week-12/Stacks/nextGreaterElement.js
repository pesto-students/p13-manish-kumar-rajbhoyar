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

var nextGreaterElement = function(arr) {
    let ans = [];
    let stack = new Stack();

    for(let i = arr.length-1; i >= 0; i--) {
        while(!stack.isEmpty() && stack.peek() <= arr[i]) {
            stack.pop();
        }
        
        if(stack.isEmpty()) {
            ans[i] = -1;
        } else {
            ans[i] = stack.peek();            
        }
        stack.push(arr[i]);
    }

    return ans;
}


const input = prompt('Enter input: ')
const array = input.split(' ');
const result = nextGreaterElement(array);

console.log(result);
