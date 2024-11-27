function Space(str){
    let res=""
    for(let char of str){
        if(char!==" "){
            res+=char
        }
    }
    // for(let i=0;i<str.length;i++){
    //     if(str[i]!==" "){
    //         res+=str[i]
    //     }
    // }
    return res
}
console.log(Space("Hello world"));
