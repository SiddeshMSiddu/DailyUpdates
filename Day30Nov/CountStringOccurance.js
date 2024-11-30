function count(str){
    let count={}
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if(!count[char]){
            count[char]=1;
        }
        else{
            count[char]++;
        }
    }
    return count
}

console.log(count("hello"));
