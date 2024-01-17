function minInRotatedArray(arr) {
    let low = 0, high = arr.length-1;

    while(low < high) {
        let mid = Math.floor(low + (high - low)/2);

         if(arr[mid] > arr[high]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return arr[high];
}


const input = prompt('Enter input: ')
const array = input.split(' ');
const result = minInRotatedArray(array);
console.log(result);