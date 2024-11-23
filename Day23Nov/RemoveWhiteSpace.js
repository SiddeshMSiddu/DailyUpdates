function whiteSpace(str){
    let res=""
    for(let i=0;i<str.length;i++){
        if(str[i]!==" "){
            res+=str[i]
        }
    }
    return res
}
console.log(whiteSpace("Hello World ... !"));
