function subsequenceRecursive(str, index){
if(index == str.length) {
    return [""]
}

let tempResult = subsequenceRecursive(str,index+1) 

const finalResult = [...tempResult]
    
for(let i=0;i<tempResult.length; i++) {
    finalResult.push(str[index]+tempResult[i])
}
    
    return finalResult;
}

function subsequenceMain(str) {
    return subsequenceRecursive(str,0)
}

console.log(subsequenceMain('abc'));