function isMinHeap(arr) {
    if(arr.length <= 1) return true;

    for (let i = 0; i <= (arr.length - 2) / 2; i++) {
        if (arr[i] > arr[2*i + 1] || (2*i + 2 != arr.length && arr[i] > arr[2*i + 2])) {
            return false;
        }
    }

    return true;
}

const input = prompt('Enter input: ');
const array = input.split(',');
const result = isMinHeap(array);
console.log(result);