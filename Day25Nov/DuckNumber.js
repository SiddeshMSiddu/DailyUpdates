// A Duck Number is a number that contains at least one 0 but does not start with 0.
function isDuckNumber(num) {
   
    let strNum = "";
    while (num > 0) {
        strNum += (num % 10) 
        num = Math.floor(num / 10);
    }
    
   
    if (strNum[0] === '0') {
        console.log("not duck");
    }
    for (let i = 1; i < strNum.length; i++) {
        if (strNum[i] === '0') {
            return true;
        }
    }
    
    return false; 
}

let number = 203;
console.log("Is it a Duck Number?", isDuckNumber(number));
