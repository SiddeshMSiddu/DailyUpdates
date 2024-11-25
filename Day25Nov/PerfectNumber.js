// A Perfect Number is a number that is equal to the sum of its proper divisors.

function perfectNum(num){
    let sum=0;
    for(let i=1;i<num;i++){
        if(num%i==0){
            sum+=i;
        }
    }
    console.log(sum===num?"Perfect number":"Not perfect number");
    
}
perfectNum(28);
perfectNum(27)
