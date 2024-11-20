// let arr=[10,20,50,3,6,80,30,12];
//  function largest(arr){
//     let temp=0;
//     for(let i=0;i<arr.length;i++){
//         if(temp<arr[i]){
//             temp=arr[i];
//         }
//     }
//     return temp;
//  }

//  console.log(largest(arr));


// PRIME NUMBER CODE
// let a=10;
// let count=0;
// for(let i=1;i<=a;i++){
//     if(a%i==0){
//         count++
//     }
// }
// console.log(count==2? "Prime":"not prime");


// REVERSE AND PALINDROME
// let str="hello";
// var newstr="";
// function reverse(str){
//     for(let i=str.length-1;i>=0;i--){
//         newstr+=str[i];
//     }
//     return newstr;
// }
// console.log(reverse(str)==str? "palindrome":"not palindrome");


// FIBONACCUI SERIES
// let n1=0;
// let n2=1;
// let sum=0;
// function fibonacci(n){
//     for(let i=1;i<=n;i++){
//         console.log(n1);
//         sum=n1+n2;
//         n1=n2;
//         n2=sum;
//     }
// }
// fibonacci(10);



// MERGING TWO SORTED ARRAY TO ONE ARRAY(CONCATING ARRAY)
// let arr1=[10,20,30,40,50];
// let arr2=[60,70,80,90,100];
// let arr3=[];

// function merge(arr1,arr2){
// for(let i=0;i<arr1.length+arr2.length;){
//     if(i<arr1.length){
//         for(let j=0;j<arr1.length;j++){
//             arr3[i]=arr1[j];
//             i++;
//         }

//     }else{
//         for(let j=0;j<arr1.length;j++){
//             arr3[i]=arr2[j];
//             i++;
//         }

//     }
// }

// for(let i=0;i<arr3.length;i++){
//     console.log(arr3[i]);
// }
// }
// merge(arr1,arr2);



// FACTORIAL OF A NUMBER WITHOUT RECURCION
// let a=5;
// function factorial(number){
//     let temp=1;
//     for(let i=1;i<=number;i++){
//         temp*=i;
//     }
//     return temp;
// }
// console.log(factorial(5));



// ANNAGRAM PROGRAM WITHOUT USING INBUILT METHODS
// let x="hello";
// let y="heolo";
// let a=x.toLowerCase();
// let b=y.toLowerCase();
// let count=0;
// if(a.length !== b.length){
//     console.log("length not equal")
// }
// else{
//     // for(let i=0;i<a.length;i++){
//     //     for(let j=0;j<b.length;j++){
//     //         if(a[i]===b[j]){
//     //             count++;
//     //             break;
//     //         }  

//     //     }
//     // }

//     let map = new Map();
//     map.get
// }
// console.log(count==b.length? "annagram":"not annagram")


// let a="hello";
// let b="HELLO";
// let count=0;
// let x=a.toLocaleLowerCase;
// let y=b.toLocaleLowerCase;
// if(x.length!=y.length){
//     console.log("length not equal");
// }
// else{
//     for(let i=0;i<a.length;i++){
//         for(let j=0;j<b.length;j++){
//             if(x[i]===y[j]){
//                 count++;
//                 break;
//             }
//         }
//     }
// }

// console.log(count==a.length? "annagram":"not annagram")




// GREATEST NUMBER IN AN ARRAY
// let arr=[50,20,40,60,80,70];
// let temp=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>temp){
//         temp=arr[i]
//     }
// }
// console.log(temp);




// Title Case program
// function toTitleCase(str) {
//     return str
//         .toLowerCase() // Convert the entire string to lowercase
//         .split(' ') // Split the string into an array of words
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
//         .join(' '); // Join the array back into a string
// }
// // Example usage
// const input = "hello world! welcome to JAVASCRIPT programming.";
// const result = toTitleCase(input);
// console.log(result); // Output: "Hello World! Welcome To Javascript Programming."



// Annagram
// let a = "hello";
// let b = "olleh";
// let count = 0;
// function annagram(a,b) {
//     if (a.length != b.length) {
//         console.log("num length not equal hence no annagram");
//     }
//     else {
//         for (let i = 0; i < a.length; i++) {
//             for (let j = 0; j < b.length; j++) {
//                 if (a[i]===b[j]) {
//                     count++;
//                     break;
//                 }
//             }
//         }    
//     }
//     console.log(count==b.length?"annagram":"not annagram");
// }


// annagram(a,b);

// let a="hello";
// let b="HEppO";
// let count=0;
// let x=a.toLocaleLowerCase;
// let y=b.toLocaleLowerCase;
// if(x.length!=y.length){
//     console.log("length not equal");
// }
// else{
//     for(let i=0;i<a.length;i++){
//         for(let j=0;j<b.length;j++){
//             if(x[i]===y[j]){
//                 count++;
//                 break;
//             }
//         }
//     }
// }

// console.log(count==a.length? "annagram":"not annagram")

// function findIntersection(arr1, arr2) {
//     let intersection = []; // Array to store common elements

//     // Iterate through the first array
//     for (let i = 0; i < arr1.length; i++) {
//         // Check if the current element exists in the second array
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 // Check if the element is already in the result array
//                 let alreadyExists = false;
//                 for (let k = 0; k < intersection.length; k++) {
//                     if (intersection[k] === arr1[i]) {
//                         alreadyExists = true;
//                         break;
//                     }
//                 }
//                 // Add to the intersection array if not already present
//                 if (!alreadyExists) {
//                     intersection.push(arr1[i]);
//                 }
//             }
//         }
//     }

//     return intersection;
// }

// // Example usage
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [3, 4, 5, 6, 7];
// console.log(findIntersection(array1, array2)); // Output: [3, 4, 5]


// Intersection of an array
// function findIntersection(arr1, arr2) {
//     // Create an empty array to store the intersection
//     let intersection = [];
    
//     // Iterate through the first array
//     for (let i = 0; i < arr1.length; i++) {
//         let currentElement = arr1[i];
//         // Check if the current element is in the second array
//         for (let j = 0; j < arr2.length; j++) {
//             if (currentElement === arr2[j]) {
//                 // Check if the element is already in the intersection array
//                 let alreadyInIntersection = false;
//                 for (let k = 0; k < intersection.length; k++) {
//                     if (intersection[k] === currentElement) {
//                         alreadyInIntersection = true;
//                         break;
//                     }
//                 }
//                 // Add the element if it's not already in the intersection array
//                 if (!alreadyInIntersection) {
//                     intersection.push(currentElement);
//                 }
//                 break;
//             }
//         }
//     }

//     return intersection;
// }

// // Example usage:
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [3, 4, 5, 6, 7];
// let result = findIntersection(array1, array2);
// console.log(result); // Output: [3, 4, 5]




// making single array using nested array.
// function flattenArray(nestedArray) {
//     let result = [];

//     function flatten(arr) {
//         for (let i = 0; i < arr.length; i++) {
//             if (Array.isArray(arr[i])) {
//                 // Recursively flatten nested arrays
//                 flatten(arr[i]);
//             } else {
//                 // Add non-array elements to the result
//                 result.push(arr[i]);
//             }
//         }
//     }

//     flatten(nestedArray);
//     return result;
// }

// // Example usage:
// let nestedArray = [1, [2, [3, 4], 5], [6, 7], 8];
// let flattenedArray = flattenArray(nestedArray);
// console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]


// Flattening nested array into single array.
// function flatterarray(nestedarray){
//     let result=[];

//     function flatter(arr){
//         for(let i=0;i<arr.length;i++){
//             if(Array.isArray(arr[i])){
//                 flatter(arr[i]);
//             }
//             else{
//                 result.push(arr[i]);
//             }
//         }
//     }
//     flatter(nestedarray);
//     return result;
// }
// let nestedArray = [1, [2, [20],[3, 4], 5], [6, 7], 8];
// let flattenedArray = flatterarray(nestedArray);
// console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]


// array left shift of 2 steps 
// function rotateArrayLeft(arr, steps) {
//     let result = [];
//     let n = arr.length;
   
//     // Adjust steps to be within the bounds of the array length
//     steps = steps % n;
   

//     // Fill the result array with rotated elements
//     for (let i = 0; i < n; i++) {
//         // Calculate the new position for each element
//         let newIndex = (i + steps) % n;
//         result[newIndex] = arr[i];
//     }

//     return result;
// }

// // Example usage:
// let array = [1, 2, 3, 4, 5];
// let steps = 2;
// console.log(rotateArrayLeft(array, steps)); 




// array right shift of 2 steps 
// function rotateArrayLeft(arr, steps) {
//     let result = [];
//     let n = arr.length;
   
//     // Adjust steps to be within the bounds of the array length
//     steps = steps % n;
   

//     // Fill the result array with rotated elements
//     for (let i = 0; i < n; i++) {
//         // Calculate the new position for each element
//         let newIndex = (i + steps) % n;
//         result[i] = arr[newIndex];
//     }

//     return result;
// }

// // Example usage:
// let array = [1, 2, 3, 4, 5];
// let steps = 2;
// console.log(rotateArrayLeft(array, steps)); 



// function rotatearray(arr,steps){
//     let result=[];
//     let n=arr.length;

//     steps=steps%n;

//     for(let i=0;i<n;i++){
//         let newIndex=(i+steps)%n;
//         result[i]=arr[newIndex]

//     }

//     return result;
// }

// let array = [1, 2, 3, 4, 5];
// let steps = 2;
// console.log(rotatearray(array, steps)); 

// Reverse a String
// function reverse(str){
//     let revstr="";
//     for(let i=str.length-1;i>=0;i--){
//         revstr +=str[i];
//     }
 
//  return revstr;   
// }

// let oldstr="123";
// console.log(reverse(oldstr));



// PRIME NUMBER
// function isPrime(arr) {    
//  function isPrime(num){
//     let count=0;
//     for(let i=1;i<=num;i++){
//         if(num%i==0){
//             count++;
//         }
//     }
//     if(count==2){
//         return true;
//     }
//  }

//  function ArrayisPrime(arr){
//     let prime=[];
//     for(let i=0;i<arr.length;i++){
//         if(isPrime(arr[i])){
//             prime.push(arr[i]);
//         }
//     }
//     for(let i=0;i<prime.length;i++){
//         console.log("Prime number "+prime[i] );
//     }
//  }

// let arr=[1,7,3,11,10,8];
// ArrayisPrime(arr);



// FACTORIAL of NUMBER
// function fact(num){
//     let n=1;
//     for(let i=1;i<=num;i++){
//         n*=i;
//     }
//     return n;
// }
// console.log(fact(5));



// MERGING 2 SORTED ARRAY 

// let arr1=[10,20,30,40,50];
// let arr2=[60,70,80,90];
// let arr3=[];
// function mergArray(arr1,arr2){
// for(let i=0;i<arr1.length+arr2.length;){
//     for(let j=0;j<arr1.length;j++){
//         arr3[i]=arr1[j];
//         i++;
//     }
//     for(let k=0;k<arr2.length;k++){
//         arr3[i]=arr2[k];
//         i++;
//     }

// }
// for(let k=0;k<arr3.length;k++){
//     console.log(arr3[k]);
// }
// }
// mergArray(arr1,arr2);
    

// NUMBER OF TIMES LETTER OCCURED IN STRING

// function repeat(str){
// let count={};
// for(let i=0;i<str.length;i++){
//     const char=str[i];
//     if((char>='a' && char<='z')|| (char>='A' && char<='Z')){
//         const lowercase=char.toLowerCase();
//         if(!count[lowercase]){
//             count[lowercase]=1;
//         }
//         else{
//             count[lowercase]++;
//         }
//     }
    
// }
// return count;

// }

// let str="hellllo";
// console.log(repeat(str));


// flattening arrray or inner array is converted to single array

// function flattening(arr){
//     let result=[];

//     function faltten(arr){
//         for(let i=0;i<arr.length;i++){
//             if(Array.isArray(arr[i])){
//                 faltten(arr[i]);
//             }
//             else{
//                 result.push(arr[i]);
//             }
//         }
//     }
//     faltten(arr);
//     return result;
// }
// let arr=[1,[2,3,4],5,6,6,[8,[9],10]];
// console.log(flattening(arr))



// function maxnum(arr){
//     let temp=0;
//     for(let i=0;i<arr.length;i++){
//         if(temp<arr[i]){
//             temp=arr[i];
//         }
//     }
//     console.log("Max number is "+temp);
    
// }

// let arr=[10,80,50,60,20,5,100];
// maxnum(arr)

