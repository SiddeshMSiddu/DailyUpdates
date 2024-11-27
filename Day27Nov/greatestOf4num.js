let a=20;
let b=55;
let c=300;
let d=40;
if(a>b){
    if(a>c){
        if(a>d){
            console.log("a is greatest");
        }else{
            console.log("d is greatest");
            
        }
    }else{
        if(c>d){
            console.log("c is greatest");
        }else{
            console.log("d is greatest");
        }
    }
}else{
    if(b>c){
       if(b>d){
        console.log("b is greatest");
       }else{
        console.log("d is greatest");
       }
    }else{
        if(c>d){
            console.log("c is greatest");
        }else{
            console.log("d is greatest");
        }
    }
}