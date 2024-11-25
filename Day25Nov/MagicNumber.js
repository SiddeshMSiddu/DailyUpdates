// A number is a Magic Number if the repeated sum of its digits eventually leads to 1.
// Example Input: 19 (1 + 9 = 10 → 1 + 0 = 1)

function MagicNum(num){
    let temp=num;
    let sum=0;
    let sum1=0;
    while(temp>0){
        let rem=temp%10;
        sum+=rem;
        temp=Math.floor(temp/10);
    }
    while(sum>0){
        let rem=sum%10;
        sum1+=rem;
        sum=Math.floor(sum/10);
    }
    console.log(sum1==1? "Magic Number":"Not Magic Number");
    
}
MagicNum(91)
MagicNum(199)