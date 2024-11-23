function RemChar(str,char){
    let res='';
    for(let i=0;i<str.length;i++){
        if(str[i]!== char){
            res+=str[i]
        }
    }
    return res;
}
console.log(RemChar("Hello World...!","l"));
