var reversePolishNotation = function(arr) {
    let stack = [];

    for(let i = 0; i < arr.length; i++) {
        if(!isNaN(arr[i])) {
            stack.push(parseInt(arr[i]));
        } else {
            let operand1 = stack.pop();
            let operand2 = stack.pop();
            let result;
            switch(arr[i]) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    result = operand1 / operand2;
                    break;
                default:
                    throw new Error('Invalid operator');
            }
            stack.push(result);
        }
    }

    return stack.pop();
}


const input = prompt('Enter input: ')
const array = input.split(' ');
const result = reversePolishNotation(array);

console.log(result);
