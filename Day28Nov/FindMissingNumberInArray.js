function missingNum(arr){
    let num=arr.length+1
    let sum=0;
    let index=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    for(let i=1;i<=num;i++){
        index+=i;
    }
    return index-sum;
}

let arr=[1,2,3,5,6,7,8,9,10];
console.log(missingNum(arr));
