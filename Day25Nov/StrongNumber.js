// A Strong Number is a number where the sum of the factorials of its digits equals the number itself.
function factorial(num){
    let prod=1;
    for(let i=1;i<=num;i++){
        prod*=i;
    }
    return prod;
}

function strongNum(num){
    let n1=num;
    let temp=num
    let sum=0;
    while(temp>0){
        let rem=temp%10;
        sum+=factorial(rem)
        temp=Math.floor(temp/10);
    }
    console.log(sum==n1?"Strong Number":"Not strong number");
    
}
strongNum(125);
strongNum(145);
strongNum(165)