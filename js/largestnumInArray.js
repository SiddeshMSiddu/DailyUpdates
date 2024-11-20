function largest(num){
    let temp=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>temp){
            temp=arr[i];
        }
    }
    return temp;
}

let arr=[10,50,80,40,90,20]
console.log(largest(arr));
