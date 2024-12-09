function annagram(char1,char2){

    let word1=char1.toUpperCase();
    let word2=char2.toUpperCase();
    let charCount1={}
    let charCount2={}
    if(word1.length!==word2.length){
        return false;
    }

    for(let i=0;i<word1.length;i++){
        let ch=word1[i]
        if(!charCount1[ch]){
            charCount1[ch]=0;
        }else{
            charCount1[ch]++
        }
    }

    for(let i=0;i<word2.length;i++){
        let ch=word2[i]
        if(!charCount2[ch]){
            charCount2[ch]=0;
        }else{
            charCount2[ch]++
        }
    }


    for(let ch in charCount1){
        if(charCount1[ch]!==charCount2[ch]){
            return false;
        }
    }
    return true
}

console.log(annagram("silent","SILENT"));
console.log(annagram("Hello","helllo"));

