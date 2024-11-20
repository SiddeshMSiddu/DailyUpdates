function prime(num){
    let count=0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            count++;
        }
    }
    if(count==2){
        return num;
    }
}


function pullArray(arr){
    for(let i=0;i<arr.length;i++){
        if(prime(arr[i])){
            console.log("prime number "+arr[i]);
            
        }
    }
}
let arr=[10,20,7,11,2];
pullArray(arr);