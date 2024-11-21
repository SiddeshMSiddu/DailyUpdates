function sum(arr){
    let sum=0;
    for( let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum;
}
let array=[10,20,30,40]
console.log(sum(array));
