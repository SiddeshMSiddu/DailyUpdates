function power(base,exponent){
    let res=1;
    for(let i=1;i<=exponent;i++){
        res*=base
    }
    return res;
}
console.log(power(3,3));
console.log(power(5,2));

