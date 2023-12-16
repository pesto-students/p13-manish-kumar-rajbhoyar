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

var isValid = function(s) {
    const stack = [];
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s.charAt(i);
        switch(c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }
    
    return stack.length === 0;
};



const input = prompt('Enter input: ')
const result = isValid(input);

console.log(result);