function calcWordFrequencies() {

    let input = prompt("Enter a list of words separated by spaces");
    const inputArray = input.split(" ");

    const map = new Map();

    // looping over the elements of array
    for (element of inputArray) {
        if (map.has(element)) {
            // incrementing the value for the key if it is already present in the map
            map.set(element, (map.get(element) + 1));
        } else {
            // adding a new key to the map if the value is not found
            map.set(element, 1);
        }
    }
    console.log(map);
}

calcWordFrequencies();