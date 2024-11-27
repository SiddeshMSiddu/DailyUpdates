function Occurance(str,char){
    let count=0;
    for(let x of str){
        if(x==char){
            count++
        }
    }
    return count
}
console.log(Occurance("hello world","l"));
