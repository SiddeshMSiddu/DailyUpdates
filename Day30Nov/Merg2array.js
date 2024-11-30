let arr1=[5,10,15,20,25];
let arr2=[30,35,40];
let arr3=[];
merge(arr1,arr2);
function merge(arr1,arr2){
    for(let i=0;i<arr1.length+arr2.length;){
        for(let j=0;j<arr1.length;j++){
            arr3[i]=arr1[j];
            i++;
        }
        for(let k=0;k<arr2.length;k++){
            arr3[i]=arr2[k];
            i++;
        }
    }
    for(let l=0;l<arr3.length;l++){
        console.log(arr3[l]);
    }
}