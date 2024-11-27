function rotate(arr,steps){
    let res=[];
    let n=arr.length;
    steps=steps%n;

    for(let i=0;i<arr.length;i++){
        let newIndex=(i+steps)%n;
        res[i]=arr[newIndex];
    }
    return res
}
console.log(rotate([1,2,3,4,5],2));
