function Duplicate(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        let alreadyExist=false;
        for(let j=0;j<res.length;j++){
            if(arr[i]==res[j]){
                alreadyExist=true;
                break;
            }
        }
        if(!alreadyExist){
            res.push(arr[i])
        }
    }
    return res
}

let arr=[1,2,4,2,5,3,4,6,8,7,4];
console.log(Duplicate(arr));
