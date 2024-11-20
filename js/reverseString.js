let str="hello";
 
function reverse(str){
    let temp="";
    for(let i=str.length-1;i>=0;i--){
        temp+=str[i];
    }
    console.log(temp);
    
}
reverse(str)