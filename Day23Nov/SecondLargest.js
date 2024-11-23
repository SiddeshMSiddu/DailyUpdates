function secondLargest(arr){
    let largest=-Infinity;
    let secondlargest=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secondlargest=largest;
            largest=arr[i];
        }
        else if(arr[i]>secondlargest && arr[i]<largest){
            secondlargest=arr[i];
        }
    }
    return secondlargest;
}

console.log(secondLargest([5,20,70,40,60,80,150,120]));
console.log(secondLargest([5,8,7,6,3,7]));

