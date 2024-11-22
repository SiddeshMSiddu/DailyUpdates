function EvenOrOdd(num){
    if(num%2==0){
       console.log("Even "+num);
       
    }else{
        console.log("Odd "+num);
       
    }
}

function ArrayIn(arr){
    for(let i=0;i<arr.length;i++){
        EvenOrOdd(arr[i])
    }
}
let arr=[10,20,7,30,33,37,51,15]
ArrayIn(arr)