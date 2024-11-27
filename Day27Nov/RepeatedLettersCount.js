function count(str){
    let charcount={};
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if((char>='a' && char<='z')||(char>='A' && char<='Z')){
            let lowercase=char.toLowerCase();
            if(!charcount[lowercase]){
                charcount[lowercase]=1
            }else{
                charcount[lowercase]++;
            }
        }
           
        }
        return charcount;

    }

    console.log(count("Hello"));
    
   