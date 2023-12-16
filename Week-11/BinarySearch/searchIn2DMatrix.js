function searchIn2DMatrix(arr, rows, columns, target) {
    if(!arr) return false;

    let low = 0, high = rows*columns-1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        let mid_val = arr[Math.floor(mid / columns)][mid % columns];

        if (mid_val === target)
            return true;
        else if (mid_val < target)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return false;
}


const input = prompt('Enter input 1: ');
const array = input.split(' ');
const rows = array[0];
const columns = array[1];
const target = array[array.length-1];
const inputArray = array.slice(2,array.length-1);

const array2D = [];
let temp = 0;
for (let i = 0; i < rows; i++) {
    array2D[i] = [];
  for (let j = 0; j < columns; j++) {
    array2D[i][j] = inputArray[temp++];
  }
}
const result = searchIn2DMatrix(array2D, rows, columns, target);
console.log(result);