function findPeak(arr, n) {
    if(n == 1) return 0;

    // if -infinity is considered before and after the array and peak is first or last element

    // if(arr[0] > arr[1]) return 0;
    // if(arr[n-1] > arr[n-2]) return n-1;
    // let low = 1, high = n-2;
    
    let low = 0, high = n-1;

    while(low <= high) {
        let mid = Math.floor(low + (high - low)/2);

        // if the mid element is equal to target value and is the last occurence that is, if the next element is greater than mid element or mid element is the last element, then return mid
        if(arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]) {
            return mid;
        } else if(arr[mid] > arr[mid-1]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}


const input = prompt('Enter input: ')
const array = input.split(' ');
const result = findPeak(array, array.length);
console.log(result);