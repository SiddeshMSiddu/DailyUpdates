// A Harshad Number is a number divisible by the sum of its digits.
function HarshedNum(num){
    let sum=0;
    let temp=num;
    while(temp>0){
        let rem=temp%10;
        sum+=rem;
        temp=Math.floor(temp/10);
    }
    console.log(num%sum==0? "Harshed Num":"Not Harshed");
    
}
HarshedNum(18);
HarshedNum(81)