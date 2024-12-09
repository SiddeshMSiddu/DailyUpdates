function outerArray(nested){
    let res=[]
    function flatt(arr){
        for(let i=0;i<arr.length;i++){
            if(Array.isArray(arr[i])){
                flatt(arr[i]);
            }
            else{
                res.push(arr[i]);
            }
        }
    }
    flatt(nested)
    return res;
}

console.log(outerArray([100,200,[300,30,3],400,[500],600]));
