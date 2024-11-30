function prime(num){
    let count=0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            count++
        }
    }
    if(count==2){
        return true;
    }
}function array(arr){
    let res=[];
    for(let i=0;i<arr.length;i++){
        if(prime(arr[i])){
            res.push(arr[i])
        }
    }
    return res;
}
console.log(array([5,2,3,6,7,8,4,11]));
