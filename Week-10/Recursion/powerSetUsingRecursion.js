const powerSetRecursive = (arr, prefix=[], set=[[]]) => {
    if(arr.length === 0) return;

    for (let i = 0; i < arr.length; i++) {
        // add value to prefix and push it to set
        set.push(prefix.concat(arr[i]));
        // recursively call the function by passing the prefix and pass array from next element
        powerSetRecursive(arr.slice(i + 1), prefix.concat(arr[i]), set);
    }
    return set;
}
  
console.log(powerSetRecursive([1,2,3]));
