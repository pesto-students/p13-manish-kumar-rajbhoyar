function drawTriangle(triangleSize) {

    // Your solution goes here
    let string = "";

    // outer loop to print the number of rows
    for (let i = 0; i < triangleSize; i++) {
        // inner loop to print the number of columns
        for (let j = 0; j <= i; j++) {
            string += "*";
        }
        // New line for new row
        string += "\n";
    }
    console.log(string);
}

drawTriangle(4);