function MergSort(arr){
    if(arr.length<=1)return arr;

    let mid=Math.floor(arr.length/2);
    let left=MergSort(arr.slice(0,mid));
    let right=MergSort(arr.slice(mid));

    return Merg(left,right);
}
function Merg(left,right){
    let res=[];
    let i=0;
    let j=0;
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            res.push(left[i]);
            i++;
        }
        else{
            res.push(right[j]);
            j++
        }
    }
    return res.concat(left.slice(i)).concat(right.slice(j));
}

console.log(MergSort([25,10,5,30,80,75,40]));


