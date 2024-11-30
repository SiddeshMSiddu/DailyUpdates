function array(nesterarray){
    let res=[];
    function flatten(arr){
        for(let i=0;i<arr.length;i++){
            if(Array.isArray(arr[i])){
                flatten(arr[i]);
            }
            else{
                res.push(arr[i])
            }
        }
    }
    flatten(nesterarray);
    return res;
}

console.log(array([5,10,[15,20,25],30,[35],40]));
