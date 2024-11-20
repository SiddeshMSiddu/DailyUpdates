function repeat(str){
    let count={};
    for(let i=0;i<str.length;i++){
        const char=str[i];
        if((char>='a' && char<='z')||(char>='A' && char<='Z')){
            const lowercase=char.toLowerCase();
            if(!count[lowercase]){
                count[lowercase]=1;
            }
            else{
                count[lowercase]++;
            }
        }
     
    }
    return count;
}
let str="helHlLo";
console.log(repeat(str));
