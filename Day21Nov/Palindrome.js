function palindrome(str){
    let pre=str;
    let rev ="";
    for(let i=str.length-1;i>=0;i--){
            rev+=str[i]
    }
    console.log(pre==rev? "Palindrome":"Not palindrome");
    
    
}
let a="121";
let b="abc"
palindrome(a);
palindrome(b);
