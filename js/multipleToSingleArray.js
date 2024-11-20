function arrayFlatt(nestedarray){
    let result=[];
    function flatt(arr){
        for(let i=0;i<arr.length;i++){
            if(Array.isArray(arr[i])){
                flatt(arr[i])
            }
            else{
                result.push(arr[i]);
            }
        }
    }
    flatt(nestedarray)
    return result;
}

let arr=[10,20,[30,40],50,[60]];
console.log(arrayFlatt(arr));
