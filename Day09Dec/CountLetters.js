function count(str){
    let res={}

    for(let i=0;i<str.length;i++){
        let ch=str[i].toUpperCase();
        if(!res[ch]){
            res[ch]=1
        }else{
            res[ch]++
        }
    }
    return res
}

console.log(count("helllloo"));
