function lastOccurence(arr, target) {
    let low = 0, high = arr.length-1;

    while(low <= high) {
        let mid = low + (high - low)/2;

        // if the mid element is equal to target value and is the last occurence that is, if the next element is greater than mid element or mid element is the last element, then return mid
        if(arr[mid] == target && (arr[mid+1] > arr[mid] || mid == arr.length-1)) {
            return mid;
        } else if(arr[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}


const input = prompt('Enter input: ')
const array = input.split(' ');
const target = array[array.length-1];
const inputArray = array.slice(0, array.length-1);
const result = lastOccurence(inputArray, target);
console.log(result);