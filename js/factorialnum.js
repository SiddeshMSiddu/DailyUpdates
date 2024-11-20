function factorial(num){
    let fact=1;
    for(let i=1;i<=num;i++){
        fact*=i;
    }
    return fact;
}
let n=5;
console.log(factorial(n));
