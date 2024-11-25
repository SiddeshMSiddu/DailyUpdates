function createMap(arr,callback){
    let res=[];
    for(let i=0;i<arr.length;i++){
        res.push(callback(arr[i],i,arr))
    }
    return res;
}

let arr=[1,2,3,4,5];
console.log(createMap(arr,(arr)=> arr*5));
