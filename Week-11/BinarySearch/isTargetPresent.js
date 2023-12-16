function isTargetPresent(arr, target) {
    let low = 0, high = arr.length-1;

    while(low <= high) {
        let mid = low + (high - low)/2;

        if(arr[mid] == target) {
            return true;
        } else if(arr[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return false;
}


const input = prompt('Enter input: ')
const array = input.split(' ');
const target = array[array.length-1];
const inputArray = array.slice(0, array.length-1);
const result = isTargetPresent(inputArray, target);
console.log(result);