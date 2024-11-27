function noRepeat(str){
    for(let i=0;i<str.length;i++){
        let isRepeat=false;
        for(let j=0;j<str.length;j++){
            if(str[i]==str[j] && i!=j){
                isRepeat=true;
                break;
            }
        }
        if(!isRepeat){
            return str[i];
        }
    }
    return null;
}

console.log(noRepeat("hellohello"));
