function getSquareRoot(num) {
    let low = 0, high = num;
    let ans = 0.0;

    while(low <= high) {
        let mid = low + (high - low)/2;
        let midSquared = mid*mid;
        if(midSquared == num) {
            ans = mid;
            break;
        } else if(midSquared > num) {
            high = mid - 1;
        } else {
            low = mid + 1;
            ans = mid;
        }
    }

    let increment = 0.1;
    for (let i = 0; i < 6; i++) {
        while (ans * ans <= num) {
            ans += increment;
        }

        // loop terminates when ans * ans > number
        ans = ans - increment;
        increment = increment / 10;
    }
    return ans.toFixed(6);
}


const input = prompt('Enter input: ')
const result = getSquareRoot(input);
console.log(result);