function BinarySearch(arr,key){
    let low=0;
    let heigh=arr.length-1;
    
    while(low<=heigh){
        let mid=Math.floor((low+heigh)/2);
        if(arr[mid]==key){
            return mid;
        } if(key>arr[mid]){
            low=mid+1;
        }else{
            heigh=mid-1
        }
       
    }
    return -1
}
console.log(BinarySearch([5,10,20,30,35,40],30));
console.log(BinarySearch([5,10,20,30,35,40],10));
