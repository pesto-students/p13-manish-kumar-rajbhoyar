function kthElement(arr1, arr2, m, n) {
    if(m>n){
        return kthElement(arr2, arr1, n, m);
    }
    let low = 0;
    let high = m;
    let k = Math.floor((m + n + 1)/2);
    while(low <= high){
        let mid1 = Math.floor(low + (high-low)/2);
        let mid2 = k-mid1;
        let l1 = (mid1==0) ? Number.MIN_VALUE:arr1[mid1-1];
        let l2 = (mid2==0) ? Number.MIN_VALUE:arr2[mid2-1];
        let r1 = (mid1==m) ? Number.MAX_VALUE:arr1[mid1];
        let r2 = (mid2==n) ? Number.MAX_VALUE:arr2[mid2];
        if(l1<=r2 && l2<=r1){
            if((m+n)%2 == 1) return Math.max(l1, l2);
            return (Math.max(l1,l2) + Math.min(r1,r2))/2;
        }
        else if ( l1>r2){
            high = mid1-1;
        }
        else{
            low = mid1+1;
        }
    }
    return -1;
}


const input1 = prompt('Enter input 1: ');
const array1 = input1.split(' ');
const input2 = prompt('Enter input 2: ');
const array2 = input2.split(' ');
const result = kthElement(array1, array2, array1.length, array2.length);
console.log(result);