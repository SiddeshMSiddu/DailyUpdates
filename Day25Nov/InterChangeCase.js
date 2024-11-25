function caseChange(str){
    let change=""
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if(char>='a' && char<='z'){
            change+=String.fromCharCode(char.charCodeAt(0)-32) ;       
        }
         else if(char>='A' && char<='Z'){
            change+=String.fromCharCode(char.charCodeAt(0)+32) ;     
         } 
        else{
            change+=char;
        }
    }
    return change;
}
console.log(caseChange("AbCdEfGhIjKlMn"));
console.log(caseChange("HellO WorlD"));