const countingSort = (inputArr) => {
  let k = Math.max(...inputArr);
  let n = inputArr.length;
  const count = new Array(k + 1).fill(0);
  
  for(let i = 0; i < n; i++){
    count[inputArr[i]]++;
  }

  for(let i = 1; i <= k; i++){
    count[i] = count[i] + count[i - 1];  
  }
  
  const outputArr = new Array(n).fill(0);
  
  for(let i = n - 1; i >= 0; i--) {
    outputArr[count[inputArr[i]] - 1] = inputArr[i];  
    count[inputArr[i]] = count[inputArr[i]] - 1;		
   }
  
  return outputArr;
}

const input = prompt('Enter input: ')
const array = input.split(',');
const result = countingSort(array);

for(let i = 0; i < result.length; i++) {
    console.log(result[i]);
}