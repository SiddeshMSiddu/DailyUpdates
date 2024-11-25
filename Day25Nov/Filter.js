function customFilter(arr,callback){
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(callback(arr[i],i,arr)){
            res.push(arr[i])
        }
    }
    return res
}

let arr=[1,2,3,4,5];
console.log(customFilter(arr,(arr)=>arr%2===0));
