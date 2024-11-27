function Substrings(str){
    let arr=[];
    for(let i=0;i<str.length;i++){
        let substr="";
        for(let j=i;j<str.length;j++){
            substr+=str[j];
            arr.push(substr);
        }
    }
    return arr
}
console.log(Substrings("abcd"));
