function Annagram(word1,word2){
    let charcount1={}
    let charcount2={}
    if(word1.length!=word2.length){
        return false;
    }

    for(let i=0;i<word1.length;i++){
        let char=word1[i];
        if(!charcount1[char]){
            charcount1[char]=0
        }
        charcount1[char]++;
        
    }
    for(let i=0;i<word2.length;i++){
        let char=word2[i];
        if(!charcount2[char]){
            charcount2[char]=0
        }
        charcount2[char]++;
        
    }
    for(let char in charcount1){
        if(charcount1[char]!==charcount2[char]){
            return false;
        }
    }
    return true
}
console.log(Annagram("hello","hello"));
