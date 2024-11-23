function isEven(num){
    if(num%2==0){
        return true
    }
    else{
        return false;
    }
}
function sumOfEven(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(isEven(arr[i])){
            sum+=arr[i]
        }
    }
    return sum;
}
console.log(sumOfEven([1,2,3,4,5,6]))