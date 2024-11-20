let arr1=[10,20,30,40];
let arr2=[50,60,70,80];
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