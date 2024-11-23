function MergDuplicate(arr1,arr2){
    let res=[];
    for(let i=0;i<arr1.length;i++){
        res[i]=arr1[i];
    }
    for(let i=0;i<arr2.length;i++){
        let duplicates=false;
        for(let j=0;j<res.length;j++){
            if(arr2[i]==res[j]){
                duplicates=true;
                break;
            }
        }
        if(!duplicates){
            res.push(arr2[i])
        }
    }
    return res;
}
console.log(MergDuplicate([1,2,3,4,5],[3,5,6,7,8,9]));
