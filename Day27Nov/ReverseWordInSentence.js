// Reverse even length of word in sentence

function reverse(str){
    let rev="";
    for(let i=str.length-1;i>=0;i--){
        rev+=str[i];
    }
    return rev
}

function ReverseSentence(sentence){
    let arr=sentence.split(" ");
    let postrev="";
    for(let i=0;i<arr.length;i++){
        if(arr[i].length%2==0){
            postrev+=reverse(arr[i])+" ";
        }else{
            postrev+=arr[i]+" ";
        }
    }
    return postrev;
}

let sentence="Welcome to one and all to this meeting"
console.log(ReverseSentence(sentence));
