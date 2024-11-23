function isAmstrong(num) {
    let original = num;
    let sum = 0;
    let count = 0;
    let temp=num;
    while (temp >0) {
        count++;
        temp = Math.floor(temp / 10);
    }
    temp = num;
    while (temp >0) {
        let rem = temp % 10;
        sum += power(rem,count)
        temp = Math.floor(temp / 10)
    }
    
    function power(base, exp) {
        let prod = 1;
        for (let i = 0; i < exp; i++) {
            prod *= base;
        }
        return prod;
    }

    console.log(original === sum? "Amstrong" : "Not Amstrong");
}
isAmstrong(153);
