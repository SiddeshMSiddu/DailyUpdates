// Sum of Divisors ex: 1+2+3=6 => 6 is strong number

function perfectNum(num){
    let sum=0;
    let temp=num;
    for(let i=1;i<num;i++){
        if(num%i==0){
            sum+=i
        }
    }
    console.log(sum==num? "Perfect number": "Not Perfect number"); 
}
perfectNum(7)
perfectNum(6)
perfectNum(9)