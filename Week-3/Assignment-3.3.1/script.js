let divideArray = function (numsArray) {
    let evenNums = [];
    let oddNums = [];
    for (let i = 0; i < numsArray.length; i++) {
        if (numsArray[i] % 2 == 0) {
            evenNums.push(numsArray[i]);
        } else {
            oddNums.push(numsArray[i]);
        }
    }
    if ((evenNums.length != 0) && (oddNums.length == 0)) {
        console.log("Even numbers: " + evenNums.sort());
        console.log("Odd numbers: None");
    } else if ((evenNums.length == 0) && (oddNums.length != 0)) {
        console.log("Even numbers: None");
        console.log("Odd numbers: " + oddNums.sort());
    } else {
        console.log("Even numbers: " + evenNums.sort());
        console.log("Odd numbers: " + oddNums.sort());
    }
};


let input = prompt("Enter a list of numbers separated by commas: ");
let nums = input.split(",");
divideArray(nums);