function findVowels(str){
    let count=0;
    let vowels="aeiouAEIOU"
    for(let x of str){
        for(let vowel of vowels){
            if(x==vowel){
                count++;
            }
        }
    }
    // for(let i=0;i<str.length;i++){
    //     for(let j=0;j<vowels.length;j++){
    //         if(str[i]==vowels[j]){
    //             count++
    //         }
    //     }
    // }
    return count;
}
console.log(findVowels("uuilho"));
